import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      {/* Header Section */}
      <section>
        <OpenGetQuoteDialog isOpen>
          <Image
            className="w-full"
            src={"/dc-signature/homebanner.jpg"}
            alt="Header Section"
            height={1920}
            width={1080}
          />
        </OpenGetQuoteDialog>
      </section>

      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-2">
              <div className="w-8 h-px bg-yellow-400"></div>
              <div className="w-3 h-3 border-2 border-yellow-400 rotate-45"></div>
              <div className="w-8 h-px bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl font-light text-yellow-400 mb-4">
              Why Choose DC Signature?
            </h2>
            <div className="inline-flex items-center gap-4">
              <div className="w-8 h-px bg-yellow-400"></div>
              <div className="w-3 h-3 border-2 border-yellow-400 rotate-45"></div>
              <div className="w-8 h-px bg-yellow-400"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3l14 9-14 9V3z"
                  />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-yellow-400 mb-3">
                Premium finishes
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                to upgrade your home
                <br />
                instantly
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-yellow-400 mb-3">
                An exclusive range
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                of textured finishes
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mx-auto mb-6">
                <div className="text-yellow-400 text-2xl font-bold">24+</div>
              </div>
              <h3 className="text-xl font-medium text-yellow-400 mb-3">
                24+ high-end finishes
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                for your dream home
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 2l3 3-3 3-3-3 3-3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-yellow-400 mb-3">
                Preferred choice
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                of top architects and
                <br />
                interior designers
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-md transition-colors duration-300">
              Meet A Design Expert Today!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
