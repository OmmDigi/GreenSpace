"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { ArrowUpRight, CircleArrowRight } from "lucide-react";
import { SERVICES } from "@/constant";
import Link from "next/link";

export default function OurServices() {
  SwiperCore.use([Navigation]);

  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 3);
    }
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full relative mx-auto max-w-[90%] max-sm:max-w-full max-sm:mx-0">
      <Swiper
        slidesPerView={sliderPreviewView}
        centeredSlides={false}
        spaceBetween={40}
        className={cn("w-full hover:cursor-grab")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {SERVICES.map((service) => (
          <SwiperSlide
            key={service.id}
            className="flex-center flex-col relative aspect-video min-h-[19rem] overflow-hidden max-sm:w-full z-10"
          >
            <Link href={`/services/${service.id}`}>
              <Image
                className="w-full h-full object-cover"
                src={service.image}
                alt="Service Image"
                height={1200}
                width={1200}
              />
            </Link>
            <div className="absolute bottom-0 right-0 left-0 flex items-end z-0 px-4 bg-gradient-to-t from-[#0000002f] to-[#0000008a]">
              <h2 className="font-[400] tracking-wider w-full text-lg text-white py-3.5">
                {service.name}
              </h2>
            </div>
            <Link href={`/services/${service.id}`}>
              <button className="size-10  absolute right-0 top-0 bg-secondary flex items-center justify-center z-10">
                <ArrowUpRight size={18} color="#fff" />
              </button>
            </Link>
            {/* <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="block"
            >
              
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-sm:flex max-sm:gap-9 max-sm:pt-2.5 max-sm:justify-center">
        <div className="absolute top-0 bottom-0 -left-12 flex items-center justify-center max-sm:static">
          <CircleArrowRight
            className="rotate-180 active:scale-90 cursor-pointer"
            strokeWidth={1}
            color="#000"
            onClick={goBack}
            size={30}
          />
        </div>

        <div className="absolute top-0 bottom-0 -right-12 flex items-center justify-center max-sm:static">
          <CircleArrowRight
            strokeWidth={1}
            color="#000"
            className="active:scale-90 cursor-pointer"
            onClick={goNext}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
