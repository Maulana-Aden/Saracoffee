import React from "react";
import { useRef } from "react";
import AreaCom from "./AreaCom";
import Signature from "./Signature";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Area() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div class="relative flex flex-col content-center justify-baseline gap-20 w-screen h-[130vh] bg-linear-to-b from-[#211C17] to-[#BA7123] font-poppins max-md:h-screen max-md:py-auto">
        <h1 class="text-white font-aguafina mt-27 text-4xl">Coffee Spot</h1>
        <div class="slider-container relative">
          <Slider ref={sliderRef} {...settings}>
            <AreaCom
              area={{
                url: "/img/Area/Area-1.png",
                title: "Indoor Area",
                desc: "A clean and comfortable space designed for relaxation. Our indoor area offers cozy seating, soft lighting, and a calm atmosphere, making it the perfect place to enjoy your coffee, read, or spend time with friends.",
              }}
            />
            <AreaCom
              area={{
                url: "/img/Area/Area-1.png",
                title: "Indoor Area",
                desc: "A clean and comfortable space designed for relaxation. Our indoor area offers cozy seating, soft lighting, and a calm atmosphere, making it the perfect place to enjoy your coffee, read, or spend time with friends.",
              }}
            />
            <AreaCom
              area={{
                url: "/img/Area/Area-1.png",
                title: "Indoor Area",
                desc: "A clean and comfortable space designed for relaxation. Our indoor area offers cozy seating, soft lighting, and a calm atmosphere, making it the perfect place to enjoy your coffee, read, or spend time with friends.",
              }}
            />
            <AreaCom
              area={{
                url: "/img/Area/Area-1.png",
                title: "Indoor Area",
                desc: "A clean and comfortable space designed for relaxation. Our indoor area offers cozy seating, soft lighting, and a calm atmosphere, making it the perfect place to enjoy your coffee, read, or spend time with friends.",
              }}
            />
            <AreaCom
              area={{
                url: "/img/Area/Area-1.png",
                title: "Indoor Area",
                desc: "A clean and comfortable space designed for relaxation. Our indoor area offers cozy seating, soft lighting, and a calm atmosphere, making it the perfect place to enjoy your coffee, read, or spend time with friends.",
              }}
            />
          </Slider>
        </div>
        <div class="absolute flex justify-between w-full px-3 text-white top-130 ">
          <button
            class="cursor-pointer text-4xl"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i class="ri-arrow-left-line"></i>
          </button>
          <button
            class="cursor-pointer text-4xl"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Area;
