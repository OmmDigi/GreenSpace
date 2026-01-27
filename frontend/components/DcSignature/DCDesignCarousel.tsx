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
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  buttonText: string;
}

function DCDesignCarousel({ buttonText, headingText, images }: IProps) {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 3);
    }
  }, []);

  return (
    <section className="bg-[#c1b5a6] py-10">
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
              <div className="p-2 bg-[#282220] rounded-3xl">
                <Image
                  alt={image.alt}
                  src={image.src}
                  height={1280}
                  width={1280}
                  className="rounded-3xl h-56"
                />
                <span className="block text-center text-[#efd496] pt-1.5">{image.caption}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center mt-16">
        <OpenGetQuoteDialog isOpen>
          <Button className="bg-neutral-900 text-[#efd496] hover:!bg-neutral-800">{buttonText}</Button>
        </OpenGetQuoteDialog>
      </div>
    </section>
  );
}

export default DCDesignCarousel;
