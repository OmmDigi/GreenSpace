import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import React from "react";

export default function EmiOptionsPage() {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-12 lg:px-24 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ color: "#00776e" }}
        >
          EMI Options
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We make premium interiors affordable with easy monthly installment
          plans.
        </p>
      </section>

      {/* EMI Benefits */}
      <section className="mb-16">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-8 text-center"
          style={{ color: "#00776e" }}
        >
          Benefits of Choosing EMI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "0% Interest Plans",
            "Minimal Down Payment",
            "Flexible Tenure Options",
            "Quick Approval Process",
            "No Hidden Charges",
            "Trusted Financing Partners",
          ].map((benefit, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-lg font-semibold" style={{ color: "#00776e" }}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12 px-6 rounded-2xl mb-16">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center mb-8"
          style={{ color: "#00776e" }}
        >
          How EMI Works
        </h2>
        <ol className="list-decimal list-inside max-w-3xl mx-auto space-y-4 text-gray-700">
          <li>Select your interior package or custom project.</li>
          <li>Choose from available EMI plans.</li>
          <li>Submit basic KYC documents.</li>
          <li>Get approval within 24–48 hours.</li>
          <li>Start your dream home project while paying monthly!</li>
        </ol>
      </section>

      {/* EMI Application Form */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center mb-8"
          style={{ color: "#00776e" }}
        >
          Apply for EMI
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded w-full"
            />
          </div>
          <textarea
            placeholder="Project Details"
            className="border p-3 rounded w-full h-32"
          />
          <button
            type="submit"
            className="py-3 px-6 rounded text-white"
            style={{ backgroundColor: "#00776e" }}
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* CTA Banner */}
      <section
        className="text-center py-8 rounded-2xl"
        style={{ backgroundColor: "#edc93e", color: "#00776e" }}
      >
        <h3 className="text-xl font-semibold mb-2">
          Need help selecting the right EMI plan?
        </h3>
        <p className="mb-4">
          Our finance team is here to guide you every step of the way.
        </p>
        <OpenGetQuoteDialog isOpen>
          <button
            className="py-2 px-5 rounded text-white"
            style={{ backgroundColor: "#00776e" }}
          >
            Contact Us
          </button>
        </OpenGetQuoteDialog>
      </section>
    </div>
  );
}
