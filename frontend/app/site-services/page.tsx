import React from "react";
import HeroSection from "@/components/SideServices/HeroSection";
import ServiceComparisonSection from "./ServiceComparisonSection";
import SiteServiceList from "@/components/SideServices/SiteServiceList";
import ReviewsCarousel from "@/components/AiComponents/ReviewsCarousel";
import Button from "@/components/Button";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import DesignCarousel from "@/components/SideServices/DesignCarousel";

export default function page() {
  return (
    <main>
      <HeroSection />
      <ServiceComparisonSection />

      <div className="space-y-10">
        <DesignCarousel
          headingText="— Fabulous False Ceiling Designs To Suit Every Taste And Budget —"
          buttonText="Talk To Our Design Experts Today →"
          images={[
            {
              src: "/Projects/false-ceiling/1.jpg",
              alt: "False Ceiling",
            },
            {
              src: "/Projects/false-ceiling/2.jpg",
              alt: "False Ceiling",
            },
            {
              src: "/Projects/false-ceiling/3.jpg",
              alt: "False Ceiling",
            },
          ]}
        />

        <DesignCarousel
          headingText="— Painting Solutions To Match Your Style —"
          buttonText="Book A Free Consultation →"
          images={[
            {
              src: "/Projects/painting-solutions/1.jpg",
              alt: "Painting Solutions",
            },
            {
              src: "/Projects/painting-solutions/2.jpg",
              alt: "Painting Solutions",
            },
            {
              src: "/Projects/painting-solutions/3.jpg",
              alt: "Painting Solutions",
            },
          ]}
        />

        <DesignCarousel
          headingText="— A Range Of Civil Work For Your Home —"
          buttonText="Talk To Our Experts →"
          images={[]}
        />

        <DesignCarousel
          headingText="— Electrical Services For Every Need —"
          buttonText="Get A Free Quote Today →"
          images={[
            {
              src: "/Projects/electrical-services/1.jpg",
              alt: "Electrical Services",
            },
            {
              src: "/Projects/electrical-services/2.jpg",
              alt: "Electrical Services",
            },
            {
              src: "/Projects/electrical-services/3.jpg",
              alt: "Electrical Services",
            },
          ]}
        />

        <DesignCarousel
          headingText="— Shower Partition Designs —"
          buttonText="Meet Our Designer →"
          images={[
            {
              src: "/Projects/showe-partition/1.jpg",
              alt: "Shower Partition",
            },
            {
              src: "/Projects/showe-partition/2.jpg",
              alt: "Shower Partition",
            },
            {
              src: "/Projects/showe-partition/3.jpg",
              alt: "Shower Partition",
            },
          ]}
        />

        <DesignCarousel
          headingText="— Furniture Designs —"
          buttonText="Talk To Our Expert →"
          images={[
            {
              src: "/Projects/furniture/1.jpg",
              alt: "Shower Partition",
            },
            {
              src: "/Projects/furniture/2.jpg",
              alt: "Shower Partition",
            },
            {
              src: "/Projects/furniture/3.jpg",
              alt: "Shower Partition",
            },
          ]}
        />
      </div>

      <SiteServiceList />

      <section className="bg-[#f0eae4] py-10 mt-16">
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-10">
          — Our Happy Customers —
        </h2>
        <ReviewsCarousel />

        <OpenGetQuoteDialog isOpen className="flex items-center justify-center">
          <Button>Let&apos;s Become A Happy Customer →</Button>
        </OpenGetQuoteDialog>
      </section>
    </main>
  );
}
