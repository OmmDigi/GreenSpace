"use client";
import React, { useRef, useState, useTransition } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  CheckSquare,
  User,
  Phone,
  Mail,
  MapPin,
  Loader2,
  IndianRupee,
} from "lucide-react";
import { IMultipForm } from "@/types";
import { multiStepForm } from "@/app/actions/multiStepForm";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MultiStepForm = () => {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IMultipForm>({
    floorPlan: "",
    budget: "",
    requirements: [],
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const route = useRouter();

  const totalSteps = 4;

  const floorPlans = [
    { id: "1BHK", label: "1 BHK" },
    { id: "2BHK", label: "2 BHK" },
    { id: "3BHK", label: "3 BHK" },
    { id: "4BHK", label: "4 BHK" },
    { id: "Other", label: "Other" },
  ];

  const budgets = [
    { id: "4-7", label: "4 lac to 7 lac" },
    { id: "7-10", label: "7 lac to 10 lac" },
    { id: "10-15", label: "10 lac to 15 lac" },
    { id: "15-20", label: "15 lac to 20 lac" },
    { id: "20-30", label: "20 lac to 30 lac" },
  ];

  const requirements = [
    "Kitchen",
    "Wardrobe",
    "Entertainment Unit",
    "Study Unit",
    "Crockery Unit",
    "Puja Unit",
    "Paint",
    "False Ceiling",
  ];

  const interiorImages = [
    "/gp-slider/1.webp",
    "/gp-slider/2.webp",
    "/gp-slider/3.webp",
    "/gp-slider/4.webp",
  ];

  const handleFloorPlanChange = (value: string) => {
    setFormData({ ...formData, floorPlan: value });
  };

  const handleBudgetChange = (value: string) => {
    setFormData({ ...formData, budget: value });
  };

  const handleRequirementToggle = (requirement: string) => {
    const updatedRequirements = formData.requirements.includes(requirement)
      ? formData.requirements.filter((r) => r !== requirement)
      : [...formData.requirements, requirement];
    setFormData({ ...formData, requirements: updatedRequirements });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = (form: FormData) => {
    const newFormData = { ...formData };
    newFormData.name = form.get("name")?.toString() || "";
    newFormData.phone = form.get("phone")?.toString() || "";
    newFormData.email = form.get("email")?.toString() || "";
    newFormData.location = form.get("location")?.toString() || "";
    setFormData(newFormData);

    startTransition(async () => {
      try {
        await multiStepForm(newFormData);
        route.push("/thank-you");
      } catch (error: any) {
        alert(error?.message);
      }
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.floorPlan !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.requirements.length > 0;
      case 4:
        return (
          formData.name && formData.phone && formData.email && formData.location
        );
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen wrapper flex items-center justify-center p-4">
      <div className="bg-white overflow-hidden w-full space-y-12">
        <h2 className="text-4xl md:text-5xl text-center font-bold">
          <span style={{ color: "#00776e" }}>Get</span>{" "}
          <span className="relative">Quote</span>
        </h2>
        <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          {/* Left Side - Form */}
          <div>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-96">
              {/* Step 1: Floor Plan */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6 gap-3.5">
                    <Home className="text-teal-600 h-6 w-6" />
                    <h2 className="text-xl font-bold text-gray-800">
                      Your Floor Plan
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Select your apartment configuration
                  </p>
                  <div className="space-y-4">
                    {floorPlans.map((plan) => (
                      <label
                        key={plan.id}
                        className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 cursor-pointer transition-all duration-200 hover:shadow-md"
                      >
                        <input
                          type="radio"
                          name="floorPlan"
                          value={plan.id}
                          checked={formData.floorPlan === plan.id}
                          onChange={(e) =>
                            handleFloorPlanChange(e.target.value)
                          }
                          className="w-5 h-5 text-teal-500 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="ml-3 text-lg font-medium text-gray-700">
                          {plan.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Budget */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6">
                    <IndianRupee className="h-6 w-6 text-teal-500 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-800">
                      Your Budget
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    What&apos;s your budget range for the interior design?
                  </p>
                  <div className="space-y-4">
                    {budgets.map((budget) => (
                      <label
                        key={budget.id}
                        className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 cursor-pointer transition-all duration-200 hover:shadow-md"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget.id}
                          checked={formData.budget === budget.id}
                          onChange={(e) => handleBudgetChange(e.target.value)}
                          className="w-5 h-5 text-teal-500 border-gray-300 focus:ring-teal-500"
                        />
                        <span className="ml-3 text-lg font-medium text-gray-700">
                          ₹{budget.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6">
                    <CheckSquare className="h-6 w-6 text-teal-500 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800">
                      Requirements
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Select the services you need (multiple selection allowed)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requirements.map((requirement) => (
                      <label
                        key={requirement}
                        className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 cursor-pointer transition-all duration-200 hover:shadow-md"
                      >
                        <input
                          type="checkbox"
                          checked={formData.requirements.includes(requirement)}
                          onChange={() => handleRequirementToggle(requirement)}
                          className="w-5 h-5 text-teal-500 border-gray-300 focus:ring-teal-500 rounded"
                        />
                        <span className="ml-3 text-lg font-medium text-gray-700">
                          {requirement}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6">
                    <User className="h-6 w-6 text-teal-500 mr-3" />
                    <h2 className="text-xl font-bold text-gray-800">
                      Contact Details
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    We&apos;ll use these details to get in touch with you
                  </p>
                  <form
                    action={handleFormSubmit}
                    ref={formRef}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Location *
                      </label>
                      <input
                        required
                        name="location"
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Enter your location"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}

              <div className="flex-1"></div>

              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all ${
                    canProceed()
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    formRef.current?.requestSubmit();
                  }}
                  disabled={isPending}
                  className={`flex items-center gap-1.5 px-8 py-3 rounded-xl font-medium transition-all ${
                    !isPending
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                  {isPending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : null}
                </button>
              )}
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative overflow-hidden aspect-square w-full rounded-3xl">
            <Image
              src={interiorImages[currentStep - 1]}
              alt="Interior Design"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
