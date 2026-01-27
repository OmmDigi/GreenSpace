"use client";

import { Share2 } from "lucide-react";
import { referEarnForm } from "../actions/referEarnForm";
import { useTransition } from "react";

export default function ReferAndEarnForm() {
  const [isPending, startTransition] = useTransition();

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await referEarnForm(formData);
        alert(response.message);
      } catch (error: any) {
        alert(error?.message);
      }
    });
  };
  return (
    <form action={handleFormSubmit} className="bg-gray-50 rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            required
            type="text"
            name="yourName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent"
            placeholder="Enter your name *"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Phone Number *
          </label>
          <input
            required
            type="tel"
            name="yourPhone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent"
            placeholder="Enter your phone number *"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Friend&apos;s Name *
          </label>
          <input
            required
            type="text"
            name="friendName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent"
            placeholder="Enter your friend&apos;s name *"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Friend&apos;s Phone Number *
          </label>
          <input
            required
            type="tel"
            name="friendPhone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent"
            placeholder="Enter your friend&apos;s phone number *"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          disabled={isPending}
          className="bg-[#00776e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005a54] transition-colors inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed gap-2"
        >
          {isPending ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <Share2 className="w-5 h-5 mr-2" />
          )}
          {isPending ? "Submitting..." : "Send Referral"}
        </button>
      </div>
    </form>
  );
}
