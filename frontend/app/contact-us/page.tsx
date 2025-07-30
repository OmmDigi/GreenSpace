import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import ContactUsPageForm from "./ContactUsPageForm";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative aspect-[3/0.6]">
        <Image
          className="size-full z-0 object-cover"
          src={"/contact-us-banner.jpg"}
          alt="Contact Us Page Banner"
          height={1920}
          width={1080}
        />
        <div className="text-white bg-black/50 py-20 absolute z-10 inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                Ready to transform your space? Get in touch with our expert
                interior designers today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-teal-600 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+91 98366 77669</p>
            <p className="text-gray-600">+91 98042 20277</p>
            <p className="text-gray-600">+91 62895 32707</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-teal-600 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">info@greenspaceinterior.in</p>
            <p className="text-gray-600">career@greenspaceinterior.in</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-teal-600 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              287/A, Shreema Housing Complex, Opposite Of Maruti Showroom
            </p>
            <p className="text-gray-600">
              Jalkal, Maheshtala, Kolkata – 700141
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-teal-600 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Sat: 9AM - 7PM</p>
            <p className="text-gray-600">Sunday: 10AM - 5PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ContactUsPageForm />

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expert Designers
                    </h4>
                    <p className="text-gray-600">
                      Our team of experienced designers brings creativity and
                      expertise to every project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Materials
                    </h4>
                    <p className="text-gray-600">
                      We use only the finest materials and finishes to ensure
                      lasting beauty.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Timely Delivery
                    </h4>
                    <p className="text-gray-600">
                      We complete projects on time without compromising on
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customer Satisfaction
                    </h4>
                    <p className="text-gray-600">
                      Your satisfaction is our priority. We work closely with
                      you throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    287/A, Shreema Housing Complex, Opposite Of Maruti Showroom,
                    Jalkal, Maheshtala, Kolkata – 700141
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation today and let us bring your dream space to
            life.
          </p>
          <OpenGetQuoteDialog isOpen>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
          </OpenGetQuoteDialog>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
