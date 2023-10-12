import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

// Data for banner items
const bannerItems = [
  {
    id: 1,
    image: "https://i.ibb.co/FhLx0ry/1.jpg",
  },
  {
    id: 2,
    image: "https://i.ibb.co/DWRh29V/2.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co/S7TmRt7/3.jpg",
  },
];

const Banner = () => {
  return (
    <div>
      <div className="lg:h-[450px] flex justify-center items-center gap-4 py-4">
        <div className="w-full h-full">
          {/* Ant Design Carousel for displaying images */}
          <Carousel
            autoplay
            waitForAnimate={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={6000}
          >
            {bannerItems?.map((item) => (
              <div
                key={item.id}
                className="relative h-[400px] w-full"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* Next.js Image component for image optimization */}
                  <Image
                    src={item.image}
                    alt={item.image}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
