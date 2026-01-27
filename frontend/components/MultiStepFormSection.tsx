"use client";
import Image from "next/image";
import MultiStepForm from "./MultiStepForm";
import { useState } from "react";

const MultiStepFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const interiorImages = [
    "/gp-slider/1.webp",
    "/gp-slider/2.webp",
    "/gp-slider/3.webp",
    "/gp-slider/4.webp",
  ];

  return (
    <div className="min-h-screen wrapper flex items-center justify-center p-4">
      <div className="bg-white overflow-hidden w-full space-y-12">
        <h2 className="text-4xl md:text-5xl text-center font-bold">
          <span style={{ color: "#00776e" }}>Get</span>{" "}
          <span className="relative">Quote</span>
        </h2>
        <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          {/* Left Side - Form */}
          <MultiStepForm onCurrentStepChange={setCurrentStep} />

          {/* Right Side - Image Slider */}
          <div className="relative overflow-hidden aspect-square w-full rounded-3xl">
            <Image
              src={interiorImages[currentStep - 1]}
              alt="Interior Design"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepFormSection;
