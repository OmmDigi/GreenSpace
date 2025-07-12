"use client";

import React from "react";
import { Shield, DollarSign, Home, Truck } from "lucide-react";

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Flat 15+ Years",
      subtitle: "Warranty",
      description: "Long-lasting quality guaranteed",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "0% EMI",
      subtitle: "Available",
      description: "Easy payment options",
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700",
    },
    {
      icon: <Home className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "20% Space Saving",
      subtitle: "Design",
      description: "Optimized layouts",
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Deadline Oriented Delivery",
      subtitle: "Service",
      description: "On-time completion",
      gradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-600 to-orange-700",
    },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eeca45] to-[#d4b139]">
              Green Space Interior
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence with our premium interior solutions designed
            for modern living
          </p>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-3 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div
                  className={`mb-6 p-4 bg-gradient-to-br ${feature.gradient} group-hover:${feature.hoverGradient} rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl max-sm:text-sm font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <h4 className="text-sm max-sm:text-sm font-semibold text-[#eeca45] mb-3 uppercase tracking-wide">
                  {feature.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#eeca45] to-[#d4b139] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#eeca45] to-teal-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <OpenGetQuoteDialog isOpen className="inline-block">
            <Button>
              Get Free Consultation
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </OpenGetQuoteDialog>
        </div> */}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;

// import React from "react";
// import { Shield, DollarSign, Home, Truck, Settings } from "lucide-react";
// import Button from "./Button";
// import OpenGetQuoteDialog from "./Utils/OpenGetQuoteDialog";

// const WhyChooseSection: React.FC = () => {
//   const features = [
//     {
//       icon: <Shield className="w-8 h-8 text-[#85684e]" strokeWidth={1} />,
//       title: "Flat 15+ Years",
//     },
//     {
//       icon: <DollarSign className="w-8 h-8 text-[#85684e]" strokeWidth={1} />,
//       title: "0% EMI",
//     },
//     {
//       icon: <Home className="w-8 h-8 text-[#85684e]" strokeWidth={1} />,
//       title: "20% Space Saving",
//     },
//     {
//       icon: <Truck className="w-8 h-8 text-[#85684e]" strokeWidth={1} />,
//       title: "Deadline Oriented Delivery",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Features Grid */}
//         <div className="flex items-center justify-around gap-6 flex-wrap">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group grow basis-[8rem] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2"
//             >
//               <div className="flex flex-col items-center text-center">
//                 {/* Icon Container */}
//                 <div className="mb-4 p-3 bg-[#eeca45] rounded-full transition-colors duration-300">
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-800 mb-1">
//                   {feature.title}
//                 </h3>

//                 {/* Subtitle */}
//                 {/* <h4 className="text-base font-semibold text-gray-700 mb-3">
//                   {feature.subtitle}
//                 </h4> */}

//                 {/* Description */}
//                 {/* <p className="text-sm text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p> */}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <OpenGetQuoteDialog isOpen className="text-center mt-12">
//           <Button>Get Free Consultation</Button>
//         </OpenGetQuoteDialog>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;
