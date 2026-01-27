import Image from "next/image";
import React from "react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Button from "../Button";

const FETCHERLIST = [
  {
    id: "1",
    text: "End-To-End Interior Solutions",
    subtext: "For Your Unique Needs",
    image: "/site-service/End-To-End.png",
  },
  {
    id: "2",
    text: "Trusted & Certified Vendors",
    subtext: "Delivering High Quality Workmanship",
    image: "/site-service/Trusted.png",
  },
  {
    id: "3",
    text: "Wide Range of Site Services",
    subtext: "For All Areas Of Your Home",
    image: "/site-service/WideRange.png",
  },
];

const SITE_SERVICE_CHOOSE_REASON = [
  {
    id: "1",
    text: "FALSE CEILINGS AT AN UNBEATABLE PRICE",
    points: [
      "High quality materials",
      "Top-notch workmanship",
      "1 year warranty",
    ],
    image: "/site-service/whyGreenSpaceIcon1.png",
  },
  {
    id: "2",
    text: "SEAMLESS PROJECT PLANNING & MANAGEMENT",
    points: [
      "A dedicated senior design manager to supervise execution",
      "Project tracking software",
      "Real time project updates",
    ],
    image: "/site-service/whyGreenSpaceIcon2.png",
  },
  {
    id: "3",
    text: "100% TRANSPARENCY GUARANTEED",
    points: [
      "Transparency on the quality of materials",
      "Timely delivery",
      "No hidden charges",
    ],
    image: "/site-service/whyGreenSpaceIcon3.png",
  },
  {
    id: "4",
    text: "SUPERIOR QUALITY AT EVERY STEP",
    points: [
      "A specialised quality control team",
      "A dedicated project manager for frequent check-ins",
      "Advanced software for seamless execution",
    ],
    image: "/site-service/whyGreenSpaceIcon4.png",
  },
];

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Image with Overlaid Text */}
      <OpenGetQuoteDialog isOpen>
        <Image
          className="w-full"
          src="/site-service/siteservicebanner.jpg"
          alt="Site Service Page"
          height={1920}
          width={1080}
        />
      </OpenGetQuoteDialog>

      {/* Three Services Section with Brown Background */}
      <div className="bg-gradient-to-r from-[#9e7d60] to-[#9e7d60]">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FETCHERLIST.map((fetcher) => (
              <li
                key={fetcher.id}
                className="flex items-center justify-center flex-col -translate-y-20"
              >
                <Image
                  className="w-[13rem]"
                  src={fetcher.image}
                  alt={fetcher.text}
                  height={1080}
                  width={1080}
                />
                <h2 className="font-semibold text-xl text-white">
                  {fetcher.text}
                </h2>
                <p className="text-gray-100">{fetcher.subtext}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            — Why Choose Green Space Interior&apos;s Site Services For Your Home? —
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {SITE_SERVICE_CHOOSE_REASON.map((reason) => (
              <li
                key={reason.id}
                className="bg-white flex items-center flex-col  rounded-lg p-6 shadow-lg border-2 border-teal-200"
              >
                <Image
                  className="w-[7rem]"
                  alt={reason.text}
                  src={reason.image}
                  height={1080}
                  width={1080}
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                  {reason.text}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {reason.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="text-center mt-12">
            {/* <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Book A Free Consultation
            </button> */}
            <OpenGetQuoteDialog isOpen>
              <Button>Book A Free Consultation</Button>
            </OpenGetQuoteDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
