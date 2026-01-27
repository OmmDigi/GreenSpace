import DetailsPageForm from "@/components/AiComponents/DetailsPage/DetailsPageForm";
import { Mail, MapPinHouse, Phone, Play } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceGallery from "./ServiceGallery";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import { SERVICES } from "@/constant";
import Button from "@/components/Button";

interface IProps {
  params: Promise<{ service_id: string | undefined }>;
}

export default async function page({ params }: IProps) {
  const service_id = (await params).service_id;
  if (!service_id) {
    return notFound();
  }

  const singleService = SERVICES.find((item) => item.id === service_id);
  if (!singleService) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <span className="hidden">{service_id}</span>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Media & Details */}
          <div className="space-y-6">
            {/* Media Section */}
            <div>
              <div className="relative w-full aspect-[2/1.5] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                <div>
                  <Image
                    src={singleService.image}
                    alt="Modern Living Room Design"
                    className="size-full aspect-[2/1.5] object-cover"
                    height={1200}
                    width={1200}
                  />
                  {singleService.singlePageInfo?.fetcherVideo ? (
                    <div className="absolute inset-0 bg-black/20 bg-opacity-30 flex items-center justify-center">
                      <button
                        // onClick={() => setIsVideoPlaying(true)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-[#00776e] p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                      >
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {singleService.singlePageInfo?.heading}
                </h1>
                {/* <p className="text-lg text-gray-600 mb-6">
                  Contemporary living area with minimalist approach, featuring
                  premium finishes and sophisticated color palette.
                </p> */}

                {/* <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    (4.9/5 from 127 reviews)
                  </span>
                </div> */}
              </div>

              {/* <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">2-3 Weeks Completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Award Winning Design</span>
                </div>
              </div> */}

              <div className="space-y-4">
                {/* <h3 className="text-xl font-semibold text-gray-900">
                  About This Design
                </h3> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: singleService.singlePageInfo?.description || "",
                  }}
                  className="text-gray-600 leading-relaxed"
                ></p>
                {/* <p className="text-gray-600 leading-relaxed">
                  The design features a harmonious color palette, premium
                  furniture selections, and strategic lighting that transforms
                  the space into a welcoming sanctuary for relaxation and
                  entertainment.
                </p> */}
              </div>

              {/* Pricing */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-90">Starting from</p>
                    <p className="text-3xl font-bold whitespace-pre-wrap">
                      {singleService.singlePageInfo?.priceStarting}
                    </p>
                    <p className="text-sm opacity-90">
                      *Price varies based on requirements
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <p className="text-sm opacity-90">Special Offer</p>
                    <p className="text-lg font-semibold">25% OFF</p>
                    <p className="text-xs opacity-75">Until May 31st</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="sticky top-0">
            <DetailsPageForm currentServiceName={singleService.name} />
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="rounded-xl p-8 mb-12 pt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">
                  +91 9836677669 <br /> +91 9804220277 <br /> +91 6289532707
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">info@greenspaceinterior.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPinHouse className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">
                  287/A, Shreema Housing Complex, Opposite Of Maruti Showroom,
                  Jalkal, Maheshtala, Kolkata – 700141
                </p>
              </div>
            </div>
          </div>
        </div>

        <ServiceGallery service_id={service_id} />
      </div>

      {/* Footer CTA */}
      <div className="bg-[#00776e] text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join over 225+ satisfied customers who have transformed their homes
            with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenGetQuoteDialog
              isOpen
              extraValue={{ form_type: "multi-step-form" }}
            >
              {/* <button className="bg-white text-[#00776e] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Quote
              </button> */}
              <Button>Get Quote</Button>
            </OpenGetQuoteDialog>
            {/* <button className="border-2 border-white hover:bg-white hover:text-[#00776e] font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Visit
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
