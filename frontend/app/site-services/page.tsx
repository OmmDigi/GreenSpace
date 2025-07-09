import React from "react";
import HeroSection from "@/components/SideServices/HeroSection";
import ServiceComparisonSection from "./ServiceComparisonSection";
import DesignCarousel from "@/components/SideServices/DesignCarousel.tsx";
import SiteServiceList from "@/components/SideServices/SiteServiceList";
import ReviewsCarousel from "@/components/AiComponents/ReviewsCarousel";
import Button from "@/components/Button";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";

export default function page() {
  return (
    <main>
      <HeroSection />
      <ServiceComparisonSection />

      <div className="space-y-10">
        <DesignCarousel
          headingText="— Fabulous False Ceiling Designs To Suit Every Taste And Budget —"
          buttonText="Talk To Our Design Experts Today →"
          images={[]}
        />

        <DesignCarousel
          headingText="— Painting Solutions To Match Your Style —"
          buttonText="Book A Free Consultation →"
          images={[]}
        />

        <DesignCarousel
          headingText="— A Range Of Civil Work For Your Home —"
          buttonText="Talk To Our Experts →"
          images={[]}
        />

        <DesignCarousel
          headingText="— Electrical Services For Every Need —"
          buttonText="Get A Free Quote Today →"
          images={[]}
        />

        <DesignCarousel
          headingText="— Shower Partition Designs —"
          buttonText="Meet Our Designer →"
          images={[]}
        />
      </div>

      <SiteServiceList />

      <section className="bg-[#f0eae4] py-10 mt-16">
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-10">
          — Our Happy Customers —
        </h2>
        <ReviewsCarousel />

        <OpenGetQuoteDialog isOpen className="flex items-center justify-center">
          <Button>Let's Become A Happy Customer →</Button>
        </OpenGetQuoteDialog>
      </section>
    </main>
  );
}
