import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
        <p className="text-gray-600 text-lg">
          Ready to start your project? Contact us today for a free consultation.
        </p>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Phone */}
        <div className="group relative">
          <div className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-gray-800 p-4 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-sm mb-2">Call us anytime</p>
                <a
                  href="tel:+15551234567"
                  className="text-gray-800 font-medium hover:text-gray-900 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="group relative">
          <div className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-gray-800 p-4 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm mb-2">Send us a message</p>
                <a
                  href="mailto:info@yourcompany.com"
                  className="text-gray-800 font-medium hover:text-gray-900 transition-colors duration-200 break-all"
                >
                  info@yourcompany.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="group relative">
          <div className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-gray-800 p-4 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600 text-sm mb-2">Visit our office</p>
                <address className="text-gray-800 font-medium not-italic text-center leading-relaxed">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="group relative">
          <div className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-gray-800 p-4 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600 text-sm mb-2">We&apos;re open</p>
                <div className="text-gray-800 font-medium text-sm">
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-4">
            Contact us today for a free quote and consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:info@yourcompany.com"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
