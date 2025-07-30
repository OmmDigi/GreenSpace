"use client";

import Button from "@/components/Button";
import { IJObList } from "@/types";
import { Send } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { applyJobForm } from "../actions/applyJobForm";
import { useSearchParams } from "next/navigation";

interface IProps {
  jobOpenings: IJObList[];
}

export default function ApplyJobForm({ jobOpenings }: IProps) {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const [selectedPosition, setSelectedPosition] = useState<string>(
    jobOpenings[0].title
  );

  useEffect(() => {
    setSelectedPosition(
      decodeURI(searchParams.get("position") || jobOpenings[0].title)
    );
  }, [searchParams.toString()]);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await applyJobForm(formData);
        alert(response.message);
      } catch (error: any) {
        alert(error.message);
      }
    });
  };
  return (
    <section id="applyJobForm" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-gray-600">
            Submit your application and take the first step towards your dream
            career
          </p>
        </div>

        <form action={handleSubmit} className="rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your full name"
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
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position Applied For *
              </label>
              <select
                key={selectedPosition}
                name="position"
                required
                onChange={(e) => setSelectedPosition(e.currentTarget.value)}
                defaultValue={selectedPosition}
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a position</option>
                {jobOpenings.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <select
                name="experience"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter / Additional Information
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button type="submit" loading={isPending}>
              <Send className="w-5 h-5" />
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
