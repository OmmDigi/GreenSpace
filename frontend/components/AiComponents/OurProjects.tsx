"use client";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CircleArrowRight,
  Eye,
  ArrowRight,
  GalleryHorizontal,
} from "lucide-react";
import CustomLink from "../CustomLink";
import Button from "../Button";
// import { useSearchParams } from "next/navigation";
import CustomLinkProgress from "../CustomLinkProgress";
import { COMPLETED_PROJECTS } from "@/data/projects";
import HandleCustomGalleryDialog from "../Dialogs/HandleCustomGalleryDialog";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Link from "next/link";

export default function OurProjects() {
  SwiperCore.use([Navigation, Pagination]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(2.5);

  // const [projectsToShow, setProjectToShow] = useState<ICompeltedProjects[]>([]);

  // const searchParams = useSearchParams();

  // const projectType = searchParams.get("type") || "completed-projects";

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 800) {
          setSliderPreviewView(1);
        } else if (window.innerWidth <= 1024) {
          setSliderPreviewView(2.5);
        } else {
          setSliderPreviewView(2.5);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <section className="w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center">
            <div className="inline-block">
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
              >
                <GalleryHorizontal className="w-5 h-5 text-[#00776e]" />
                <span className="text-[#00776e] font-medium">Projects</span>
              </div>
              <h2
                data-aos="fade-up"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              >
                Our Latest Projects
              </h2>
              <div
                data-aos="fade-up"
                className="w-20 h-1 bg-[#00776d] mx-auto mb-6"
              ></div>
            </div>
            {/* <p
            data-aos="fade-up"
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore our collection of stunning interior designs that transform
            spaces into extraordinary experiences. Each project reflects our
            commitment to excellence and innovation.
          </p> */}
          </div>

          <div className="flex items-center gap-3.5 mb-12 overflow-x-auto">
            <CustomLink
              withoutProgress={true}
              scroll={false}
              queryParams={true}
              href={"?type=completed-projects"}
              className="shrink-0"
            >
              {/* <Button
                className={cn(
                  "hover:!translate-y-0",
                  projectType === "completed-projects"
                    ? ""
                    : "bg-transparent border border-teal-600 text-black hover:text-white"
                )}
              >
                
              </Button> */}
              <div className="space-y-1.5">
                <button className="font-semibold text-xl">
                  <CustomLinkProgress className="flex items-center gap-2.5">
                    Finished Projects
                  </CustomLinkProgress>
                </button>
                <div className="w-full h-1 bg-yellow-300 rounded-full"></div>
              </div>
            </CustomLink>
            {/* <CustomLink
              withoutProgress={true}
              scroll={false}
              queryParams={true}
              href={"?type=work-in-progress"}
              className="shrink-0"
            >
              <Button
                className={cn(
                  "hover:!translate-y-0",
                  projectType === "work-in-progress"
                    ? ""
                    : "bg-transparent border border-teal-600 text-black hover:text-white"
                )}
              >
                <CustomLinkProgress className="flex items-center gap-2.5">
                  Work In Progress
                </CustomLinkProgress>
              </Button>
            </CustomLink> */}
          </div>

          {/* Gallery Slider */}
          <div data-aos="fade-up" className="relative">
            <Swiper
              slidesPerView={sliderPreviewView}
              centeredSlides={false}
              spaceBetween={30}
              className="w-full"
              pagination={{
                clickable: true,
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {COMPLETED_PROJECTS.map((item, index) => (
                <SwiperSlide key={index}>
                  <HandleCustomGalleryDialog
                    key={index}
                    isOpen={true}
                    galleryItem={item.images.map((image, index) => ({
                      alt: image.alt,
                      id: index.toString(),
                      src: image.src,
                    }))}
                    initialIndex={0}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/3]">
                        <Image
                          src={item.images[0].src}
                          alt={item.images[0].alt}
                          fill
                          className="object-cover size-full transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#00776d] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {item.title}
                          </span>
                        </div>

                        {/* View Button */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                            <Eye size={18} />
                          </button>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <Link
                            onClick={(e) => e.stopPropagation()}
                            href={`/services/${item.service_id}`}
                            className="flex items-center justify-between mb-2"
                          >
                            <span className="text-sm text-gray-200">
                              Open {item.title} Service
                            </span>
                            <ArrowRight size={20} className="text-[#00776d]" />
                          </Link>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-5">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-[#00776d] transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">
                              {item.service_id}
                            </span>
                            {/* <Link
                        href={`/gallery/${item.id}`}
                        className="text-[#00776d] font-medium text-sm hover:underline flex items-center gap-1"
                      >
                        View Details
                        <ArrowRight size={14} />
                      </Link> */}
                          </div>
                        </div>
                        <OpenGetQuoteDialog
                          className="shrink-0"
                          isOpen
                          onClick={(e) => e.stopPropagation()}
                          extraValue={{form_type: "multi-step-form",}}
                        >
                          <Button className="max-sm:py-4 max-sm:text-sm">
                            Get Quote
                          </Button>
                        </OpenGetQuoteDialog>
                      </div>
                    </div>
                  </HandleCustomGalleryDialog>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-4">
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 max-sm:static">
                <button
                  onClick={goBack}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-[#00776d] hover:text-white transition-all duration-300 group"
                >
                  <CircleArrowRight
                    className="rotate-180 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 max-sm:static">
                <button
                  onClick={goNext}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-[#00776d] hover:text-white transition-all duration-300 group"
                >
                  <CircleArrowRight
                    className="group-hover:scale-110 transition-transform"
                    size={24}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div data-aos="fade-up" className="text-center mt-5">
            {/* <button className="inline-flex items-center gap-2 bg-[#00776d] text-white rounded-full font-medium hover:bg-[#005a52] transition-colors duration-300 hover:gap-3">
            <CustomLink href="/design-gallery" className="px-8 py-3 ">
              View All Projects
              <ArrowRight size={18} />
            </CustomLink>
          </button> */}
            <Button>
              <CustomLink href="/design-gallery">
                View All Projects
                <ArrowRight size={18} />
              </CustomLink>
            </Button>
          </div>
        </div>

        <style jsx global>{`
          .swiper-pagination {
            position: static !important;
            margin-top: 2rem;
          }

          .custom-bullet {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
            background: #00776d !important;
            opacity: 0.3 !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            transition: opacity 0.3s ease !important;
          }

          .custom-bullet-active {
            opacity: 1 !important;
          }
        `}</style>
      </section>
    </>
  );
}
