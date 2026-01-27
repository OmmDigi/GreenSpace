"use client";

import { Handshake } from "lucide-react";
import Image from "next/image";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Hafele",
    logo: "/partners/hafele.png",
    category: "Hardware Fitting Supplier",
    description: "Providing hardware and fitting systems",
    link: "https://www.hafeleindia.com/en/",
  },
  {
    name: "Hettich",
    logo: "/partners/hettich.png",
    category: "Material Supplier",
    description: "Providing furniture fittings",
    link: "https://hettichindiaonline.com/",
  },
  {
    name: "Jaguar Bath Fittings",
    logo: "/partners/jaquar.jpg",
    category: "Material Supplier",
    description: "Jaquar Sanitaryware conforms to highest quality",
    link: "https://www.jaquar.com/",
  },
  {
    name: "Saint Gobain",
    logo: "/partners/Saint-Gobain.jpg",
    category: "Material Supplier",
    description: "Saint-Gobain is committed to ensuring that our activities",
    link: "https://saint-gobain.com/",
  },
  {
    name: "Doorset",
    logo: "/partners/Doorset.jpg",
    category: "Material Supplier",
    description: "Dorset India, the leading manufacture of door locks",
    link: "https://www.dorsetindia.com/",
  },
  {
    name: "Plantex Fittings",
    logo: "/partners/PlantexFittings.jpg",
    category: "Material Supplier",
    description: "Plantex Bathroom Accessories- Stainless Steel 6pcs",
    link: "https://www.plantex.in/",
  },
  {
    name: "Kohler",
    logo: "/partners/Kohler.jpg",
    category: "Material Supplier",
    description: "Kohler is your one stop destination for luxury sanitaryware",
    link: "https://www.kohler.co.in/",
  },
  {
    name: "Kajaria Tiles",
    logo: "/partners/KajariaTiles.jpg",
    category: "Material Supplier",
    description: "India's Number 1 Tile Company offering designer floor tiles",
    link: "https://www.kajariaceramics.com/",
  },
  {
    name: "Godrej",
    logo: "/partners/Godrej.png",
    category: "Material Supplier",
    description:
      "Godrej Enterprises Group cater to 1.1 billion consumers globally",
    link: "https://www.godrejenterprises.com/",
  },
  {
    name: "Ebco",
    logo: "/partners/Ebco.png",
    category: "Material Supplier",
    description:
      "Ebco's product range spans Drawer Slides, Hinges, Computer Furniture Fittings,",
    link: "https://ebco.in/",
  },
  {
    name: "D’Decor",
    logo: "/partners/DDecor.png",
    category: "Material Supplier",
    description:
      "Discover premium soft furnishings for your home! Shop our extensive home furnishing",
    link: "https://www.ddecor.com/",
  },
];

export const OurChannelPartners: React.FC = () => {
  SwiperCore.use([Navigation]);

  const swiperRef = useRef<SwiperClass | null>(null);

  const [sliderPreviewView, setSliderPreviewView] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderPreviewView(window.innerWidth <= 800 ? 1 : 4);
    }
  }, []);

  // const goNext = () => {
  //   swiperRef.current?.slideNext();
  // };

  // const goBack = () => {
  //   swiperRef.current?.slidePrev();
  // };

  return (
    <section className="bg-white !font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
          >
            <Handshake className="w-5 h-5 text-[#00776e]" />
            <span className="text-[#00776e] font-medium">Partners</span>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="text-[#00776e]">Our Channel</span> Partners
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Collaborating with industry-leading partners to deliver exceptional
            quality and comprehensive design solutions.
          </p>
        </div>

        <div
          data-aos="fade-up"
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
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-teal-100"
              >
                <div className="mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    height={500}
                    width={500}
                  />
                </div>
                {/* <div className="mb-3">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                  {partner.category}
                </span>
              </div> */}
                {/* <h3 className="font-bold text-gray-900 text-lg mb-2">
                {partner.name}
              </h3> */}
                {/* <p className="text-gray-600 text-sm">{partner.description}</p>
              <div className="mt-4 transition-opacity duration-300">
                <Link
                  href={partner.link}
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div> */}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* <button
            onClick={goBack}
            className="absolute z-10 -left-12 top-1/2 -translate-y-1/2 bg-[#00786e]  shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button
            onClick={goNext}
            //   disabled={currentIndex >= images.length - slidesToShow.desktop}
            className="absolute -right-10 z-10 top-1/2 -translate-y-1/2 bg-[#00786e] shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
          >
            <ChevronRight size={20} className="text-white" />
          </button> */}
        </div>

        {/* <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Interested in Partnership?
          </h3>
          <p className="text-teal-100 mb-6">
            Join our network of trusted partners and grow your business with us.
          </p>
          <button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            Become a Partner
          </button>
        </div> */}
      </div>
    </section>
  );
};
