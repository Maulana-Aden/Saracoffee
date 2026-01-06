import React from "react";
import { useRef } from "react";
import Signature from "./Signature";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menu() {
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
      <div className="relative w-full h-full bg-linear-to-b from-[#DA9855] to-[#74512D] overflow-hidden">
        <h1 className="font-koulen text-white text-[80px] text- max-md:text-4xl max-md:py-30">
          OUR SIGNATURE MENU
        </h1>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
            <Signature
              menu={{
                url: "../src/img/Menu/menu.png",
                alt: "menu",
                title: "AMERICANO",
                desc: "Our signature vanilla brew blends bold coffee with a soft vanilla aroma, creating a clean and balanced flavor.",
              }}
            />
          </Slider>
        </div>
        <div className="absolute flex justify-between w-full px-10 text-white top-70 max-md:top-120 max-md:px-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="cursor-pointer text-4xl"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="cursor-pointer text-4xl"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <button className="absolute border-2 bg-[#C8A37F] text-white font-poppins text-2xl py-2 px-15 rounded-2xl right-25 bottom-20 cursor-pointer max-md:relative max-md:text-xl max-md:px-20 max max-md:right-auto ">
          More Menu
        </button>
      </div>
    </>
  );
}

export default Menu;
