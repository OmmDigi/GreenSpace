"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  // Pause,
  // Volume2,
  // VolumeX,
  // Maximize2,
} from "lucide-react";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface VideoSliderProps {
  videos: {
    id: string;
    src: string;
    thumbnail: string;
    title?: string;
    duration?: string;
  }[];
  className?: string;
  previews?: {
    mobile: number;
    desktop: number;
  };
}

const VideoSlider: React.FC<VideoSliderProps> = ({
  videos,
  className = "",
  previews = {
    mobile: 1,
    desktop: 4,
  },
}) => {
  SwiperCore.use([Navigation]);

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  // const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoIndex, setModalVideoIndex] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(previews.desktop);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(
        window.innerWidth <= 800 ? previews.mobile : previews.desktop
      );
    }
  }, []);

  const nextSlide = () => {
    swiperRef.current?.slideNext();
    // const maxIndex = videos.length - slidesToShow.desktop;
    // setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
    // setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // const togglePlay = (videoId: string, event?: React.MouseEvent) => {
  //   event?.stopPropagation();
  //   const video = videoRefs.current[videoId];
  //   if (!video) return;

  //   if (playingVideo === videoId) {
  //     video.pause();
  //     setPlayingVideo(null);
  //   } else {
  //     // Pause all other videos
  //     Object.values(videoRefs.current).forEach((v) => v.pause());
  //     setPlayingVideo(videoId);
  //     video.play();
  //   }
  // };

  // const toggleMute = (videoId: string, event: React.MouseEvent) => {
  //   event.stopPropagation();
  //   const video = videoRefs.current[videoId];
  //   if (!video) return;

  //   const newMutedVideos = new Set(mutedVideos);
  //   if (mutedVideos.has(videoId)) {
  //     newMutedVideos.delete(videoId);
  //     video.muted = false;
  //   } else {
  //     newMutedVideos.add(videoId);
  //     video.muted = true;
  //   }
  //   setMutedVideos(newMutedVideos);
  // };

  const openModal = (index: number) => {
    setModalVideoIndex(index);
    setIsModalOpen(true);
    // Pause all videos when opening modal
    Object.values(videoRefs.current).forEach((v) => v.pause());
    // setPlayingVideo(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalVideo = () => {
    setModalVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevModalVideo = () => {
    setModalVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevModalVideo();
      if (e.key === "ArrowRight") nextModalVideo();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-xl p-6">
        <Swiper
          slidesPerView={sliderPreviewView}
          centeredSlides={false}
          spaceBetween={20}
          className="w-full hover:cursor-grab"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              // onClick={(e) => togglePlay(video.id, e)}
              onClick={() => openModal(index)}
              className={cn(
                "flex-center flex-col group relative overflow-hidden max-sm:w-full z-10"
              )}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* <video
                    ref={(el) => {
                      if (el) videoRefs.current[video.id] = el;
                    }}
                    // poster={video.thumbnail}
                    className="w-full h-full object-cover"
                    muted={mutedVideos.has(video.id)}
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                  </video> */}
                  <Image
                    alt=""
                    src={video.thumbnail}
                    height={1080}
                    width={1920}
                  />

                  {/* Video Overlay Controls */}
                  <div className="absolute z-20 inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="flex items-center space-x-2 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        // onClick={(e) => togglePlay(video.id, e)}
                        onClick={() => openModal(index)}
                        className="bg-gradient-to-tl from-[#f3d662] to-[#e9c01d] rounded-full size-14 flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        {/* {playingVideo === video.id ? (
                          <Pause size={20} className="text-gray-700" />
                        ) : (
                          <Play size={20} className="text-gray-700 ml-0.5" />
                        )} */}
                        <Play size={18} className="text-black ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  )}
                </div>

                {video.title && (
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 truncate">
                      {video.title}
                    </h3>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {Array.from({
          length: Math.ceil(videos.length / slidesToShow.desktop),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              Math.floor(currentIndex / slidesToShow.desktop) === index
                ? "bg-blue-500 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-5xl max-h-full flex items-center justify-center w-full">
            <video
              key={videos[modalVideoIndex].id}
              controls
              autoPlay
              className="h-screen w-fit rounded-lg"
              poster={videos[modalVideoIndex].thumbnail}
            >
              <source src={videos[modalVideoIndex].src} type="video/mp4" />
            </video>

            {/* Modal Navigation */}
            <button
              onClick={prevModalVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={nextModalVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Info */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg">
              <p className="text-sm font-medium">
                {videos[modalVideoIndex].title}
              </p>
              <p className="text-xs opacity-75">
                {modalVideoIndex + 1} of {videos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
