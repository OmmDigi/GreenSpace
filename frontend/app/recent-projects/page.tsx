"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/constant";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import Image from "next/image";
import { COMPLETED_PROJECTS } from "@/data/projects";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const RecentProjects: React.FC = () => {
  SwiperCore.use([Navigation]);

  const swiperRefs = useRef<SwiperClass[]>([]);

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects =
    filter === "All"
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter((project) => project.service_id === filter);

  const goNext = (ref: SwiperClass) => {
    ref.slideNext();
  };

  const goBack = (ref: SwiperClass) => {
    ref.slidePrev();
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Explore our latest interior design projects showcasing innovative
              solutions and beautiful spaces.
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-4 mt-6 sm:mt-0">
            {/* <Filter className="w-5 h-5 text-gray-500" /> */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
            >
              <option value="All">All</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div>
                  {/* Image Carousel */}
                  <div className="relative bg-gray-100 flex">
                    <Swiper
                      slidesPerView={1}
                      centeredSlides={false}
                      spaceBetween={40}
                      className="w-full hover:cursor-grab z-0"
                      onSwiper={(swiper) => {
                        swiperRefs.current.push(swiper);
                      }}
                      loop={true}
                    >
                      {project.images.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="relative shrink-0 transform duration-500 max-h-[30rem] min-h-[30rem] max-sm:max-h-[20rem] max-sm:min-h-[20rem] w-full"
                        >
                          <Image
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                            fill
                          />
                        </SwiperSlide>
                      ))}

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() => goBack(swiperRefs.current[index])}
                            className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => goNext(swiperRefs.current[index])}
                            className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </Swiper>

                    {/* Image Dots */}
                    {/* {project.images.length > 1 && (
                      <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImgIndex(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imgIndex === currentImgIndex
                                ? "bg-green-500 w-8"
                                : "bg-white/60 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )} */}
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                        {project.service_id}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Designed By:{" "}
                        <span className="font-semibold text-gray-800">
                          Green Space Interior
                        </span>
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex gap-4">
                      {/* <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Project
                      </button> */}
                      <OpenGetQuoteDialog isOpen>
                        <button className="px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
                          Get Free Quote
                        </button>
                      </OpenGetQuoteDialog>
                    </div>

                    {/* <button className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition-colors duration-200">
                      More Details
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
