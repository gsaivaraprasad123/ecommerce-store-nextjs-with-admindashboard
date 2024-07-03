import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => (
  <Carousel autoplay>
    <Image
      src="/banner1.webp"
      alt="banner"
      width={2000}
      height={1000}
      className="w-screen"
    />
    <Image
      src="/banner2.webp"
      alt="banner"
      width={2000}
      height={1000}
      className="w-screen"
    />
    <Image
      src="/banner3.webp"
      alt="banner"
      width={2000}
      height={1000}
      className="w-screen"
    />
    <Image
      src="/banner4.webp"
      alt="banner"
      width={2000}
      height={1000}
      className="w-screen"
    />
  </Carousel>
);

export default App;
