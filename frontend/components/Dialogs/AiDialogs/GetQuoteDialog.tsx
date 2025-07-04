"use client";

import React, { useEffect, useTransition } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Home,
  FileText,
  Send,
  LoaderCircle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import AOSProvider from "@/components/Utils/AOSProvider";
import DialogWrapper from "../DialogWrapper";
import { handleGetQuoteDialogContactForm } from "@/app/actions/handleGetQuoteDialogContactForm";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/constant";

// const budgetRanges = [
//   "Under $10,000",
//   "$10,000 - $25,000",
//   "$25,000 - $50,000",
//   "$50,000 - $100,000",
//   "Above $100,000",
// ];

// const timelineOptions = [
//   "1-2 months",
//   "2-4 months",
//   "4-6 months",
//   "6+ months",
//   "Flexible",
// ];

const GetQuoteDialog = () => {
  const { isOpen } = useSelector(
    (state: RootState) => state.getQuoteDialogReducer
  );
  const route = useRouter();

  const [isPending, startTransition] = useTransition();

  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(setGetQuoteDialog({ isOpen: false }));
  };

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await handleGetQuoteDialogContactForm(formData);
        route.push("/thank-you");
        handleCloseDialog();
      } catch {
        alert("Something Went Wrong While Processing Your Request");
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style = "overflow : hidden";
    } else {
      document.body.style = "overflow : auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00776e 0%, #005a53 100%);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #005a53 0%, #00443e 100%);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: linear-gradient(135deg, #00443e 0%, #002f2a 100%);
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #00776e #f1f5f9;
        }
      `}</style>
      {isOpen && (
        <AOSProvider>
          <DialogWrapper
            isOpen={isOpen}
            setIsOpen={(isOpen) => {
              if (!isOpen) {
                dispatch(setGetQuoteDialog({ isOpen: false }));
              }
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              data-aos="fade-up"
              className="bg-white backdrop-blur-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar max-sm:max-w-full"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#00776e] to-[#005a53] p-6 relative">
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 text-white hover:bg-white hover:text-black hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <X size={24} />
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-white opacity-90">
                  Tell us about your dream space and we&apos;ll create a custom
                  proposal for you
                </p>
              </div>

              {/* Form */}
              <form
                action={handleFormSubmit}
                className="p-8 space-y-6 overflow-y-auto h-full"
              >
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <User size={16} className="inline mr-2 text-[#00776e]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail size={16} className="inline mr-2 text-[#00776e]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone size={16} className="inline mr-2 text-[#00776e]" />
                      Phone Number *
                    </label>
                    <input
                      pattern="^\d{10}$"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Home size={16} className="inline mr-2 text-[#00776e]" />
                      {/* Project Type * */}
                      Service *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      {SERVICES.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar
                        size={16}
                        className="inline mr-2 text-[#00776e]"
                      />
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}

                {/* Address */}
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors"
                    placeholder="Enter project address"
                  />
                </div>

                {/* Project Description */}
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FileText
                      size={16}
                      className="inline mr-2 text-[#00776e]"
                    />
                    {/* Project Description */}
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00776e] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vision, style preferences, specific requirements, or any other details..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseDialog}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#00776e] to-[#005a53] hover:from-[#005a53] hover:to-[#00776e] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    {isPending ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </div>

                {/* Note */}
                <div className="bg-gradient-to-r from-[#00776e]/5 to-[#005a53]/5 p-4 rounded-lg border-l-4 border-[#00776e]">
                  <p className="text-sm text-gray-600">
                    <strong className="text-[#00776e]">Note:</strong> We&apos;ll
                    review your request and get back to you within 24 hours with
                    a detailed quote and consultation schedule.
                  </p>
                </div>
              </form>
            </div>
          </DialogWrapper>
        </AOSProvider>
      )}
    </>
  );
};

export default GetQuoteDialog;
