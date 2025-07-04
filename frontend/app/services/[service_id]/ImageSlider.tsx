"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import HandleCustomGalleryDialog from "@/components/Dialogs/HandleCustomGalleryDialog";

interface ImageSliderProps {
  images: {
    id: string;
    src: string;
    alt: string;
    title?: string;
  }[];
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  className = "",
}) => {
  SwiperCore.use([Navigation]);

  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 4);
    }
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6">
        <Swiper
          slidesPerView={sliderPreviewView}
          centeredSlides={false}
          spaceBetween={40}
          className="w-full hover:cursor-grab"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={image.id}
              className="flex-center flex-col relative min-h-[19rem] w-48 overflow-hidden max-sm:w-full z-10"
            >
              <HandleCustomGalleryDialog
                isOpen={true}
                initialIndex={index}
                galleryItem={images}
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="aspect-square relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      height={1280}
                      width={1280}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        size={32}
                      />
                    </div>
                  </div>
                  {image.title && (
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-gray-800 truncate">
                        {image.title}
                      </h3>
                    </div>
                  )}
                </div>
              </HandleCustomGalleryDialog>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          onClick={goBack}
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-[#00786e]  shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <button
          onClick={goNext}
          //   disabled={currentIndex >= images.length - slidesToShow.desktop}
          className="absolute right-2 z-10 top-1/2 -translate-y-1/2 bg-[#00786e] shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
