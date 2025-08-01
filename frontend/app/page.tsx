import Banner from "@/components/banner/Banner";
import ContactUsSection from "@/components/AiComponents/ContactUsSection";
import ImprovedReviewsSection2 from "@/components/AiComponents/ImprovedReviewsSection2";
import OurProjects from "@/components/AiComponents/OurProjects";
import OurServices from "@/components/OurServices";
import { HandPlatter, Headset } from "lucide-react";
import AboutUsSection from "@/components/AiComponents/AboutUsSection";
import Button from "@/components/Button";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import AOSProvider from "@/components/Utils/AOSProvider";
import VideoViewSection from "@/components/VideoViewSection";
import ScrollText from "@/components/ScrollText";
import { OurClients } from "@/components/OurClients";
import { OurChannelPartners } from "@/components/OurChannelPartners";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhyGreenSpace from "@/components/WhyGreenSpace";
import MultiStepFormSection from "@/components/MultiStepFormSection";

export default function Home() {
  return (
    <AOSProvider>
      <div className="space-y-10">
        <Banner />
        <WhyChooseSection />
        <MultiStepFormSection />
        <AboutUsSection />

        <ScrollText />

        {/* Our Services */}
        <section className="font-jost wrapper space-y-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
              >
                <HandPlatter className="w-5 h-5 text-[#00776e]" />
                <span className="text-[#00776e] font-medium">Services</span>
              </div>
              <h2
                data-aos="fade-up"
                className="max-sm:text-3xl md:text-5xl font-bold mb-4 relative max-sm:mb-0"
              >
                <span className="text-[#00776e]">Our Valuable Services</span>
                <br />
                <span className="relative">
                  For You
                  <div
                    className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                    style={{ backgroundColor: "#fef3c6" }}
                  ></div>
                </span>
              </h2>
            </div>
          </div>

          <OurServices />
        </section>

        {/* Our Populer Designs */}
        <section data-aos="fade-up" className="font-jost">
          <div className="flex items-start max-h-[35rem] min-h-[35rem] overflow-hidden max-sm:flex-col max-sm:max-h-max">
            <VideoViewSection />
            <div className="bg-primary relative min-w-[40%] min-h-[35rem] p-10 flex flex-col justify-center max-sm:min-h-[28rem]">
              <h2
                data-aos="fade-left"
                className="font-semibold text-2xl tracking-wider !text-white"
              >
                Our Best Works
              </h2>

              <h3 data-aos="fade-up" className="text-white">
                2 BHK Interior Designs
              </h3>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-3.5 space-y-2.5 text-gray-200"
              >
                <p className="font-libre text-[15px] tracking-wide">
                  Experience elegance and functionality with our best 2 BHK
                  interior designs. From modern aesthetics to timeless comfort,
                  each space is crafted to reflect your personality while
                  ensuring smart space utilization. Our designs blend
                  creativity, comfort, and contemporary style to transform
                  everyday living.
                </p>
                <p className="font-libre text-[15px] tracking-wide">
                  Discover how thoughtful lighting, custom furniture, and sleek
                  finishes come together to create homes you’ll love to live in.
                </p>
              </div>

              <span data-aos="fade-up" data-aos-delay="200">
                <OpenGetQuoteDialog isOpen className="mt-10">
                  <Button
                    glowCss="!bg-white"
                    className="flex items-center gap-3.5 bg-white hover:!bg-gray-300"
                  >
                    <Headset size={15} />
                    Book A Free Consultation
                  </Button>
                </OpenGetQuoteDialog>
              </span>

              {/* <div className="absolute top-3.5 right-3.5 flex items-center gap-4">
                <CircleArrowRight
                  className="rotate-180 active:scale-90 cursor-pointer"
                  strokeWidth={1}
                  color="#fff"
                />
                <CircleArrowRight
                  strokeWidth={1}
                  color="#fff"
                  className="active:scale-90 cursor-pointer"
                />
              </div> */}
            </div>
          </div>
        </section>

        <OurProjects />

        {/* <OurBestWorks /> */}

        {/* Reviews */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <h2 className="text-2xl font-[500] bg-[#fef3c6] inline-block px-5 pt-1.5 pb-1">
            What Our Happy Customers Say
          </h2>
        </div>

        <Reviews />
      </section> */}

        <WhyGreenSpace />

        <ImprovedReviewsSection2 />

        <OurClients />

        <OurChannelPartners />

        {/* Gallery Section */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <h2 className="text-2xl font-[500] bg-[#fef3c6] inline-block px-5 pt-1.5 pb-1">
            Our Design Gallery
          </h2>
        </div>

        <OurDesignGallery />
      </section> */}

        {/* Contact Us Section */}

        <ContactUsSection />
      </div>
    </AOSProvider>
  );
}
