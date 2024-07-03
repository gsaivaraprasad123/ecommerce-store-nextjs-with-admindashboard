import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const { userId } = auth()
        
        if (!userId) {
            return new NextResponse("Unauthorized",{status:401})
        }

        await connectToDB();

        const user = await User.findOne({ clerkId: userId })
        
        if (!user) {
            return new NextResponse("User Not Found",{status:404})
        }

        const { productId } = await req.json()
        
        if (!productId) {
            return new NextResponse("Product Id required",{status:400})
        }

        const isLiked = user.wishlist.includes(productId)

        if (isLiked) {
            user.wishlist = user.wishlist.filter((id:string)=> id!==productId) //Dislike
        } else {
            user.wishlist.push(productId) //Like
        }

        await user.save()
        return NextResponse.json(user,{status:200})
    } catch (err) {
        console.log("[wishlist_POST]", err);
        return new NextResponse("Internal Server Error",{status:500})
    }
}