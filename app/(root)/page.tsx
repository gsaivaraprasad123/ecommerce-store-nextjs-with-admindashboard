import Banner from "@/components/Banner";
import Carosel from "@/components/Carosel";
import Collections from "@/components/Collections";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Carosel />
      <Collections />
      <ProductsList />
    </>
  );
}

export const dynamic = "force-dynamic";
