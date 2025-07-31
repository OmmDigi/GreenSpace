"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import HandleCustomGalleryDialog from "@/components/Dialogs/HandleCustomGalleryDialog";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";
import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import { useDispatch } from "react-redux";

interface ImageSliderProps {
  images: {
    id: string;
    src: string;
    alt: string;
    title?: string;
  }[];
  className?: string;
  itemClassName?: string;
  previews?: {
    mobile: number;
    desktop: number;
  };
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  className = "",
  itemClassName = "",
  previews = {
    mobile: 1,
    desktop: 4,
  },
}) => {
  SwiperCore.use([Navigation]);

  const dispatch = useDispatch();

  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(previews.desktop);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(
        window.innerWidth <= 800 ? previews.mobile : previews.desktop
      );
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
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6 max-sm:p-0">
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
              key={index}
              className={cn(
                "flex-center flex-col relative min-h-[18rem] max-h-[18rem] w-48 overflow-hidden max-sm:w-full max-sm:max-h-max z-10",
                itemClassName
              )}
            >
              <HandleCustomGalleryDialog
                isOpen={true}
                initialIndex={index}
                galleryItem={images}
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="aspect-[3/2] relative">
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
                    <div className="p-3 flex items-center justify-between gap-1.5 max-sm:flex-col">
                      <h3 className="text-base font-medium text-gray-800 truncate">
                        {image.title}
                      </h3>
                      {/* <OpenGetQuoteDialog isOpen> */}
                      <Button
                        className="!py-2 !px-5 !text-sm shrink-0 text-nowrap"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(
                            setGetQuoteDialog({
                              isOpen: true,
                              extraValue: {
                                form_type: "multi-step-form",
                              },
                            })
                          );
                        }}
                      >
                        Get Quote
                      </Button>
                      {/* </OpenGetQuoteDialog> */}
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
