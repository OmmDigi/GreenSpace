import React from "react";
import Image from "next/image";
import Button from "../Button";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

// // Arrow SVG Component
// const ArrowIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 100 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M0 10 L80 10 M70 5 L80 10 L70 15"
//       stroke="#D4A574"
//       strokeWidth="2"
//       fill="none"
//     />
//   </svg>
// );

// Decorative Diamond Component
const DiamondIcon = () => (
  <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-45 shadow-lg"></div>
);

interface FeatureCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  features,
}) => (
  <div className="bg-stone-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
    <div className="mb-4 rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
      {title}
    </h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-700 text-sm leading-relaxed">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const DCSignatureSection: React.FC = () => {
  const cardData = [
    {
      title: "Fluted Laminates",
      imageSrc: "/dc-sign/t1.jpg", // Replace with actual image path
      imageAlt: "Fluted Laminates texture",
      features: [
        "Textured And Decorative Panels",
        "No Painting Needed",
        "Seamless look",
        "High Durability",
      ],
    },
    {
      title: "Patterned Engineered Veneer",
      imageSrc: "/dc-sign/t2.jpg", // Replace with actual image path
      imageAlt: "Patterned Engineered Veneer texture",
      features: [
        "Designs Crafted By Laser Cutting",
        "Uniformity In Colour",
        "High Quality With Extreme Durability",
        "Premium PU Finish",
      ],
    },
    {
      title: "Fabric Panels",
      imageSrc: "/dc-sign/t3.jpg", // Replace with actual image path
      imageAlt: "Fabric Panels texture",
      features: [
        "Has the warm touch of Chenile fabric",
        "Clean And Stitchless Patterned Designs",
        "Wide Range Of Fabric Finishes",
        "Easy To Clean And Maintain",
      ],
    },
  ];

  return (
    <section className="bg-[#282220] py-16 px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <DiamondIcon />
            <div className="flex-1 max-w-md mx-4">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>
            <DiamondIcon />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            What&apos;s Special About DC Signature?
          </h2>

          <div className="flex items-center justify-center">
            <DiamondIcon />
            <div className="flex-1 max-w-md mx-4">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>
            <DiamondIcon />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cardData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              features={card.features}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <OpenGetQuoteDialog isOpen>
            <Button className="bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Meet A Design Expert Today!
            </Button>
          </OpenGetQuoteDialog>
        </div>
      </div>
    </section>
  );
};

export default DCSignatureSection;
