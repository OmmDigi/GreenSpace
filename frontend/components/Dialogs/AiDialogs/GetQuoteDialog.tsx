"use client";

import React, { useEffect, useTransition } from "react";
import { X, LoaderCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setGetQuoteDialog } from "@/redux/slice/getQuoteDialogSlice";
import AOSProvider from "@/components/Utils/AOSProvider";
import DialogWrapper from "../DialogWrapper";
import { handleGetQuoteDialogContactForm } from "@/app/actions/handleGetQuoteDialogContactForm";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/constant";
import Image from "next/image";
import MultiStepForm from "@/components/MultiStepForm";

const locations = [
  "Kolkata",
  "South 24 PGS",
  "North 24 PGS",
  "Howrah",
  "Hooghly",
  "Others",
];

const GetQuoteDialog = () => {
  const { isOpen, extraValue } = useSelector(
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
              className="bg-white max-sm:max-h-[50rem] rounded-lg max-w-4xl w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  dispatch(setGetQuoteDialog({ isOpen: false }));
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="flex grow max-sm:flex-col">
                {/* Left side - Image */}
                <div className="relative max-h-[36rem] w-[42rem] max-sm:hidden">
                  <Image
                    src="/popupleftsideimage.png"
                    alt="Interior Design"
                    className="w-full object-cover rounded-l-lg"
                    fill
                  />
                </div>

                <Image
                  src={"/popupHeaderMobile.png"}
                  alt="Green Space Interior Offer"
                  height={720}
                  width={1280}
                  className="hidden max-sm:block"
                />

                {/* Right side - Form */}
                <div className="w-full p-8 max-h-[36rem] max-sm:max-h-[70vh] overflow-y-auto nav_drop_down">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Get a{" "}
                      <span className="text-teal-600">
                        free design consultation
                      </span>
                    </h2>
                  </div>

                  {extraValue?.form_type === "multi-step-form" ? (
                    <MultiStepForm />
                  ) : (
                    <form action={handleFormSubmit} className="space-y-5">
                      {/* Property Type */}
                      {/* <div>
                      <label className="block text-gray-700 font-medium mb-3">
                        Property type
                      </label>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {propertyTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedPropertyType(type)}
                            className={`p-3 border rounded-lg text-sm text-left transition-colors ${
                              selectedPropertyType === type
                                ? "border-teal-600 bg-teal-50 text-teal-700"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div> */}

                      {/* Name */}
                      <div className="flex items-center flex-wrap gap-2.5">
                        <div className="w-full">
                          <label className="block text-gray-700 font-medium mb-3">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            type="text"
                            required
                            placeholder="Full name *"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
                          />
                        </div>
                        <div className="w-full">
                          <label className="block text-gray-700 font-medium mb-3">
                            Mobile Number *
                          </label>
                          <input
                            pattern="^\d{10}$"
                            name="phone"
                            required
                            placeholder="Mobile Number *"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Property Location */}
                      <div className="flex items-center flex-wrap gap-2.5">
                        <div className="w-full">
                          <label className="block text-gray-700 font-medium mb-3">
                            Services *
                          </label>
                          <div className="w-full p-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-colors">
                            <select
                              name="service"
                              required
                              className="w-full outline-none"
                            >
                              {SERVICES.map((item) => (
                                <option key={item.id}>{item.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="w-full">
                          <label className="block text-gray-700 font-medium mb-3">
                            Location *
                          </label>
                          {/* <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setIsLocationDropdownOpen(!isLocationDropdownOpen)
                          }
                          className="w-full p-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Home size={16} className="text-gray-500" />
                            <span
                              className={
                                selectedLocation
                                  ? "text-gray-900"
                                  : "text-red-500"
                              }
                            >
                              {selectedLocation || "Please select a location"}
                            </span>
                          </div>
                          <ChevronDown size={20} className="text-gray-500" />
                        </button>
                        {isLocationDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
                            {locations.map((location) => (
                              <button
                                key={location}
                                type="button"
                                onClick={() => {
                                  setSelectedLocation(location);
                                  setIsLocationDropdownOpen(false);
                                }}
                                className="w-full p-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                              >
                                {location}
                              </button>
                            ))}
                          </div>
                        )}
                      </div> */}
                          <div className="w-full p-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-colors">
                            <select
                              name="location"
                              required
                              className="w-full outline-none"
                            >
                              {locations.map((item, index) => (
                                <option key={index}>{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <textarea
                        name="message"
                        placeholder="Message..."
                        className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
                        rows={5}
                      ></textarea>

                      {/* WhatsApp Updates */}
                      {/* <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="whatsapp"
                        checked={whatsappUpdates}
                        onChange={(e) => setWhatsappUpdates(e.target.checked)}
                        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label
                        htmlFor="whatsapp"
                        className="text-gray-700 text-sm flex items-center gap-1"
                      >
                        Yes, send me updates via WhatsApp.
                        <span className="text-green-600 font-bold">✓</span>
                      </label>
                    </div> */}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
                      >
                        {isPending ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          "Book a Free Consultation"
                        )}
                      </button>

                      {/* Terms */}
                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you consent to{" "}
                        <a href="#" className="text-teal-600 hover:underline">
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-teal-600 hover:underline">
                          terms of use
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </DialogWrapper>
        </AOSProvider>
      )}
    </>
  );
};

export default GetQuoteDialog;
