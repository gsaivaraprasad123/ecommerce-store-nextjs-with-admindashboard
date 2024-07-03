import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Shop by Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          ))}
        </div>
      )}
    </div>

    // <div className="bg-gray-100">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
    //       <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

    //       {!collections || collections.length === 0 ? (
    //         <p className="text-body-bold mt-6">No collections found</p>
    //       ) : (
    //         <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
    //           {collections.map((collection: CollectionType) => (
    //             <div key={collection._id} className="group relative">
    //               <Link
    //                 href={`/collections/${collection._id}`}
    //                 className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
    //               >
    //                 <Image
    //                   src={collection.image}
    //                   alt={collection.title}
    //                   fill
    //                   style={{ objectFit: "cover" }}
    //                   className="h-full w-full object-cover object-center"
    //                 />
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Collections;
