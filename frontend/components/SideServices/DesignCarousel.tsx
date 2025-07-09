"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Button from "../Button";

interface IProps {
  headingText: string;
  images: { src: string; alt: string }[];
  buttonText: string;
}

function DesignCarousel({ buttonText, headingText, images }: IProps) {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 3);
    }
  }, []);

  return (
    <section className="bg-[#f0eae4] py-10">
      <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
        {headingText}
      </h2>

      <div
        className="mt-14"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          slidesPerView={sliderPreviewView}
          centeredSlides={false}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          className="w-full hover:cursor-grab max-w-[80rem]"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                alt={image.alt}
                src={image.src}
                // src={partner.logo}
                // alt={partner.name}
                height={1280}
                width={1280}
                className="rounded-3xl h-80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center mt-16">
        <OpenGetQuoteDialog isOpen>
          <Button>{buttonText}</Button>
        </OpenGetQuoteDialog>
      </div>
    </section>
  );
}

export default DesignCarousel;
