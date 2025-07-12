"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Button from "../Button";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

interface ITypeInfo {
  id: string;
  src: string;
  alt: string;
  filterType: "color" | "image";
  filterValue: string;
}

interface IFinishTypeInfo {
  id: string;
  name: string;
  typeInfo: ITypeInfo[];
}

const finishTypeOptions: IFinishTypeInfo[] = [
  {
    id: "lacquered-glass",
    name: "Lacquered Glass",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/lacquered-glass/1.webp",
        alt: "",
        filterType: "color",
        filterValue: "#a1b29e",
      },
      {
        id: "2",
        src: "/customize-kitchen/lacquered-glass/2.webp",
        alt: "",
        filterType: "color",
        filterValue: "#6dacbb",
      },
      {
        id: "3",
        src: "/customize-kitchen/lacquered-glass/3.webp",
        alt: "",
        filterType: "color",
        filterValue: "#b0afaf",
      },
      {
        id: "4",
        src: "/customize-kitchen/lacquered-glass/4.webp",
        alt: "",
        filterType: "color",
        filterValue: "#98b6c1",
      },
      {
        id: "5",
        src: "/customize-kitchen/lacquered-glass/5.webp",
        alt: "",
        filterType: "color",
        filterValue: "#95c9be",
      },
      {
        id: "6",
        src: "/customize-kitchen/lacquered-glass/6.webp",
        alt: "",
        filterType: "color",
        filterValue: "#ca675b",
      },
      {
        id: "7",
        src: "/customize-kitchen/lacquered-glass/7.webp",
        alt: "",
        filterType: "color",
        filterValue: "#6c77b7",
      },
      {
        id: "8",
        src: "/customize-kitchen/lacquered-glass/8.webp",
        alt: "",
        filterType: "color",
        filterValue: "#a4ad2c",
      },
    ],
  },
  {
    id: "veneers",
    name: "Veneers",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/veneers-new/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex1.jpg",
      },
      {
        id: "2",
        src: "/customize-kitchen/veneers-new/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex2.jpg",
      },
      {
        id: "3",
        src: "/customize-kitchen/veneers-new/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex3.jpg",
      },
      {
        id: "4",
        src: "/customize-kitchen/veneers-new/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex4.jpg",
      },
      {
        id: "5",
        src: "/customize-kitchen/veneers-new/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex5.jpg",
      },
      {
        id: "6",
        src: "/customize-kitchen/veneers-new/6.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex6.jpg",
      },
      {
        id: "7",
        src: "/customize-kitchen/veneers-new/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex7.webp",
      },
      {
        id: "8",
        src: "/customize-kitchen/veneers-new/8.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers-new/tex8.webp",
      },
    ],
  },
  {
    id: "acrylics",
    name: "Acrylics",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/acrylics/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex1.webp",
      },
      {
        id: "2",
        src: "/customize-kitchen/acrylics/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex2.webp",
      },
      {
        id: "3",
        src: "/customize-kitchen/acrylics/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex3.webp",
      },
      {
        id: "4",
        src: "/customize-kitchen/acrylics/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex4.webp",
      },
      {
        id: "5",
        src: "/customize-kitchen/acrylics/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex5.webp",
      },
      {
        id: "6",
        src: "/customize-kitchen/acrylics/6.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex6.webp",
      },
      {
        id: "7",
        src: "/customize-kitchen/acrylics/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex7.webp",
      },
    ],
  },
  {
    id: "standard-laminates",
    name: "Standard Laminates",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/standard-laminates/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex1.jpg",
      },
      {
        id: "2",
        src: "/customize-kitchen/standard-laminates/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex2.jpg",
      },
      {
        id: "3",
        src: "/customize-kitchen/standard-laminates/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex3.jpg",
      },
      {
        id: "4",
        src: "/customize-kitchen/standard-laminates/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex4.jpg",
      },
      {
        id: "5",
        src: "/customize-kitchen/standard-laminates/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex5.jpg",
      },
      {
        id: "6",
        src: "/customize-kitchen/standard-laminates/6.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex6.jpg",
      },
      {
        id: "7",
        src: "/customize-kitchen/standard-laminates/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex7.jpg",
      },
    ],
  },
  {
    id: "premium-laminates",
    name: "Premium Laminates",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/premium-laminates/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex1.jpg",
      },
      {
        id: "2",
        src: "/customize-kitchen/premium-laminates/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/standard-laminates/tex2.jpg",
      },
      {
        id: "3",
        src: "/customize-kitchen/premium-laminates/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex3.jpg",
      },
      {
        id: "4",
        src: "/customize-kitchen/premium-laminates/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex4.jpg",
      },
      {
        id: "5",
        src: "/customize-kitchen/premium-laminates/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex5.jpg",
      },
      {
        id: "6",
        src: "/customize-kitchen/premium-laminates/6.jpg",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex6.webp",
      },
      {
        id: "7",
        src: "/customize-kitchen/premium-laminates/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/premium-laminates/tex7.webp",
      },
    ],
  },
];

const CustomizeKitchen: React.FC = () => {
  const [finishTypeIndex, setFinishTypeIndex] = useState(0);
  const [selectedTypeInfoIndex, setSelectedTypeInfoIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto max-sm:px-4">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Customise Your Kitchen
            </h1>
            <p className="text-gray-600">
              Looking to customise your Kitchen? Check out the looks for the
              popular{" "}
              <span className="text-teal-600 font-medium">
                Modular Kitchen finishes
              </span>{" "}
              amongst our 10,000+ customers.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
      <div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> */}
        <div className="flex min-h-screen gap-10 py-3.5 max-sm:flex-col max-sm:gap-y-0">
          {/* Kitchen Display */}
          <div className="lg:col-span-2 max">
            <div className="bg-white rounded-lg overflow-hidden space-y-3.5">
              <div className="relative w-full aspect-[16/10] min-h-[33rem] max-sm:min-h-auto">
                {/* Main kitchen image would go here */}
                {finishTypeOptions[finishTypeIndex].typeInfo.map(
                  (item, index) => (
                    <Image
                      key={item.id}
                      className={cn(
                        "absolute inset-0 size-full",
                        selectedTypeInfoIndex === index ? "z-0" : "-z-10"
                      )}
                      alt={item.alt}
                      src={item.src}
                      height={2560}
                      width={1440}
                      loading="eager"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Finish Type */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Finish Type
              </h3>
              <div className="flex flex-wrap gap-3.5 max-sm:flex-nowrap overflow-x-auto">
                {finishTypeOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setFinishTypeIndex(index);
                      setSelectedTypeInfoIndex(0);
                    }}
                    className={`px-4 max-sm:shrink-0 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      finishTypeIndex === index
                        ? "bg-teal-600 text-white border-teal-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Options */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Style Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {styleOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStyle(option.id)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      selectedStyle === option.id
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Color Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Colors
              </h3>
              <div className="flex items-center gap-3.5 flex-wrap">
                {finishTypeOptions[finishTypeIndex].typeInfo.map(
                  (eachTypeInfo, index) => (
                    <button
                      key={eachTypeInfo.id}
                      onClick={() => setSelectedTypeInfoIndex(index)}
                      className={`w-8 h-8 border-2 transition-all duration-200 ${
                        selectedTypeInfoIndex === index
                          ? "border-teal-600 ring-2 ring-teal-600 ring-offset-2"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        backgroundColor:
                          eachTypeInfo.filterType === "color"
                            ? eachTypeInfo.filterValue
                            : "",
                      }}
                      title={eachTypeInfo.alt}
                    >
                      {eachTypeInfo.filterType === "image" ? (
                        <Image
                          className="size-full"
                          src={eachTypeInfo.filterValue}
                          alt={eachTypeInfo.alt}
                          height={50}
                          width={50}
                        />
                      ) : null}
                    </button>
                  )
                )}
              </div>
              {/* <div className="flex justify-between items-center mt-4">
                <button className="text-teal-600 text-sm font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Show More
                </button>
                <button className="text-teal-600 text-sm font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Show Less
                </button>
              </div> */}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 max-sm:flex max-sm:items-center max-sm:justify-center">
              {/* <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200">
                  Book a Free Design Consultation
                </button> */}
              <OpenGetQuoteDialog isOpen>
                <Button>Book a Free Design Consultation</Button>
              </OpenGetQuoteDialog>
              {/* <button className="w-full border border-teal-600 text-teal-600 py-3 px-6 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200">
                  View More Kitchen Designs →
                </button> */}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-medium">Disclaimer:</span> The images on our
            site are for reference only. Please contact us to discuss your
            specific needs and to tailor a unique design for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizeKitchen;
