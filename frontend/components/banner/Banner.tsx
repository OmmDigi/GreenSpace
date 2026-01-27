"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { useDispatch } from "react-redux";
import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import { BANNER_ITEMS } from "@/constant";

export default function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const dispatch = useDispatch();

  const intervelId = useRef<NodeJS.Timeout | null>(null);

  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDevice(window.innerWidth <= 700 ? "mobile" : "desktop");
    }
  }, []);

  const onNextBannerClick = () => {
    setCurrentBannerIndex((prev) => {
      if (prev >= BANNER_ITEMS.length - 1) return 0;
      return prev + 1;
    });
  };

  const onPrevBannerClick = () => {
    setCurrentBannerIndex((prev) => {
      if (prev <= 0) return BANNER_ITEMS.length - 1;
      return prev - 1;
    });
  };

  const onImageClick = () => {
    dispatch(setGetQuoteDialog({ isOpen: true }));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a minimum distance for a valid swipe

    if (distance > minSwipeDistance) {
      //swipe left
      onNextBannerClick();
    } else if (distance < -minSwipeDistance) {
      //swipe right
      onPrevBannerClick();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const startTimer = () => {
    intervelId.current = setInterval(() => {
      onNextBannerClick();
    }, 4000)
  }

  const clearTimer = () => {
    if(intervelId.current) {
      clearInterval(intervelId.current)
    }
  }

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => {
        clearTimer();
      }}
      onMouseLeave={() => {
        startTimer();
      }}
      className="relative"
    >
      <div className="flex w-full aspect-[3/1.2] max-sm:aspect-[3.6/5] cursor-pointer">
        {BANNER_ITEMS.map((item, index) => (
          <Image
            onClick={onImageClick}
            key={item.id}
            style={{ translate: `-${currentBannerIndex * 100}%` }}
            className={cn(
              "w-full flex-grow shrink-0 object-cover",
              "transition-all duration-[500ms]",
              currentBannerIndex === index ? "scale-100" : "scale-75"
            )}
            alt={item.altTag}
            src={
              device === "desktop" ? item.bannerImage : item.bannerImageMobile
            }
            height={1920}
            width={1920}
          />
        ))}
      </div>

      <div className="absolute top-0 bottom-0 left-0 flex items-center">
        <button
          onClick={onPrevBannerClick}
          role="presentation"
          className="bg-black/50 text-white size-10 flex items-center justify-center active:scale-90"
        >
          <ChevronRight className="rotate-180" />
        </button>
      </div>
      <div className="absolute top-0 bottom-0 right-0 flex items-center">
        <button
          onClick={onNextBannerClick}
          role="presentation"
          className="bg-black/50 text-white size-10 flex items-center justify-center active:scale-90"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
