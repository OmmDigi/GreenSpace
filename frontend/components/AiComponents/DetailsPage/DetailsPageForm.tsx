"use client";

import { handleServicePageFormAction } from "@/app/actions/handleServicePageFormAction";
import Button from "@/components/Button";
import { SERVICES } from "@/constant";
// import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface IProps {
  currentServiceName: string;
}

export default function DetailsPageForm({ currentServiceName }: IProps) {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();

  const handleFormAction = (formData: FormData) => {
    startTransition(async () => {
      try {
        await handleServicePageFormAction(formData);
        route.push("/thank-you");
      } catch {
        alert("Something Went Wrong While Processing Your Request");
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Get Free Consultation
        </h2>
        <p className="text-gray-600">
          Let&apos;s discuss your dream space transformation
        </p>
      </div>

      <form action={handleFormAction} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            pattern="^\d{10}$"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
            placeholder="+91 9836677669"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service You Want
            </label>
            <select
              name="service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
            >
              {SERVICES.map((service) => (
                <option
                  selected={currentServiceName === service.name}
                  key={service.id}
                  value={service.name}
                >
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
            >
              <option value="">Select budget</option>
              <option value="1-3">₹1-3 Lakhs</option>
              <option value="3-5">₹3-5 Lakhs</option>
              <option value="5-10">₹5-10 Lakhs</option>
              <option value="10+">₹10+ Lakhs</option>
            </select>
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Consultation Date
            </label>
            <input
              type="date"
              name="preferred_date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your vision, requirements, and any specific preferences..."
          />
        </div>

        {/* <button
          type="submit"
          className="w-full bg-[#00776e] hover:bg-[#00776e]/90 text-white font-semibold py-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
        >
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <span>Get Free Consultation</span>
          )}
        </button> */}
        <Button className="!w-full" loading={isPending}>
          <span>Get Free Consultation</span>
        </Button>

        <div className="text-center text-sm text-gray-500 mt-4">
          <p>We&apos;ll respond within 2 hours during business hours</p>
        </div>
      </form>
    </div>
  );
}
