"use client";

import { Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Our Clients Component
const clients = [
  {
    name: "Orbit Group",
    logo: "/clients/orbitgroup.png",
    description: "Luxury homes, penthouses",
  },
  {
    name: "Axis Bank",
    logo: "/clients/axiosbank.jpg",
    description: "Explore 225+ banking services",
  },
  {
    name: "Desari Hospitals Pvt. Ltd.",
    logo: "/clients/desarihospitals.avif",
    description: "Desari Hospitals Pvt. Ltd.",
  },
  {
    name: "Qubo Technologies",
    logo: "/clients/qubo.png",
    description: "Mission is to bring Quantum",
  },
  {
    name: "Hero Group",
    logo: "/clients/herogroup.png",
    description: "You can download our logo",
  },
  {
    name: "Indian Bank",
    logo: "/clients/indianbank.png",
    description: "Indian Bank",
  },
  {
    name: "Parban Banquets",
    logo: null,
    description: "Parban Banquets",
  },
  {
    name: "Alliance Broadband Pvt Ltd.",
    logo: "/clients/alliance.png",
    description: "Alliance Broadband Pvt Ltd.",
  },
  {
    name: "Dutta & Sons Jewellers",
    logo: null,
    description: "Dutta & Sons Jewellers",
  },
  {
    name: "GoodRick Tea Packers",
    logo: null,
    description: "GoodRick Tea Packers",
  },
  {
    name: "Dulux Paints",
    logo: "/clients/dulex.jpg",
    description: "Dulux Paints",
  },
  {
    name: "George Telegraph",
    logo: "/clients/george.jpg",
    description: "George Telegraph",
  },
  {
    name: "Dr. Lal Path Labs",
    logo: "/clients/LalPathLabs.png",
    description: "Dr. Lal Path Labs",
  },
  {
    name: "Bosch Kitchen Solutions",
    logo: "/clients/bosch.png",
    description: "Bosch Kitchen Solutions",
  },
  {
    name: "Kuchina",
    logo: "/clients/kuchina.jpg",
    description: "Kuchina",
  },
];
export const OurClients: React.FC = () => {
  SwiperCore.use([Navigation]);

  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 4);
    }
  }, []);

  return (
    <section className="!font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
          >
            <Users className="w-5 h-5 text-[#00776e]" />
            <span className="text-[#00776e] font-medium">Clients</span>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="text-[#00776e]">Our Valued</span> Clients
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We&apos;re proud to have worked with these amazing clients, creating
            beautiful spaces that exceed expectations.
          </p>
        </div>

        <div
          data-aos="fade-up"
          // className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
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
            className="w-full hover:cursor-grab"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="mb-4">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-12 object-contain mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      height={500}
                      width={500}
                    />
                  ) : (
                    <div className="bg-gray-100 h-12"></div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-500">{client.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <div className="bg-teal-600 text-white px-8 py-3 rounded-full inline-block">
            <span className="font-semibold">225+ Happy Clients Served</span>
          </div>
        </div>
      </div>
    </section>
  );
};
