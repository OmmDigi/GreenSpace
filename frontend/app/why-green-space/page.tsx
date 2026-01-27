import React from "react";
import {
  Award,
  Users,
  Clock,
  Shield,
  Leaf,
  Lightbulb,
  Star,
  CheckCircle,
  Heart,
  Target,
  Zap,
  Gift,
} from "lucide-react";
import Image from "next/image";
import { SERVICES } from "@/constant";
import ReviewsCarousel from "@/components/AiComponents/ReviewsCarousel";
import Link from "next/link";

const WhyChooseUs: React.FC = () => {
  const achievements = [
    { number: "225+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years of Experience", icon: Clock },
    { number: "225+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Designs",
      description:
        "We prioritize sustainable materials and green design principles to create environmentally responsible spaces that are both beautiful and healthy.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Our creative team brings fresh perspectives and cutting-edge design concepts to transform your space into something extraordinary.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in materials, craftsmanship, and project execution with comprehensive warranties.",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description:
        "Every project is tailored to your unique lifestyle, preferences, and budget. We listen to your needs and bring your vision to life.",
    },
    {
      icon: Zap,
      title: "Efficient Process",
      description:
        "Our streamlined workflow ensures projects are completed on time and within budget without compromising on quality.",
    },
    {
      icon: Gift,
      title: "Value for Money",
      description:
        "We provide premium interior design services at competitive prices, ensuring you get the best value for your investment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#05b1a2] to-[#00524b] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Green Space Interior?
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover what makes us the premier choice for interior design in
              Kolkata. We combine creativity, sustainability, and expertise to
              create spaces that inspire.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <achievement.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </h3>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Green Space Interior was founded with a vision to create
              beautiful, functional, and sustainable living spaces. We believe
              that good design should not only look amazing but also contribute
              to a healthier planet and improve the quality of life for our
              clients.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced designers and craftsmen are passionate
              about transforming spaces into personalized sanctuaries that
              reflect your unique style and values. We use eco-friendly
              materials and innovative design techniques to create interiors
              that are both stunning and sustainable.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-gray-700">Passionate Design</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Eco-Friendly</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <Image
                className="size-full"
                src={"/whyChooseUsSideImage.jpg"}
                alt="Why Green Space Interior Image"
                height={1280}
                width={1280}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern innovation to
              deliver exceptional interior design solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with Images */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              From concept to completion, we handle every aspect of interior
              design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Link
                href={`/services/${service.id}`}
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br relative from-teal-400 to-green-400 h-32 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-center">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to creating your dream space
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "Understanding your vision and requirements",
              },
              {
                step: "2",
                title: "Design",
                desc: "Creating detailed plans and 3D visualizations",
              },
              {
                step: "3",
                title: "Planning",
                desc: "Material selection and project timeline",
              },
              {
                step: "4",
                title: "Execution",
                desc: "Professional installation and finishing",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our satisfied customers
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div> */}
          <ReviewsCarousel />
        </div>
      </div>

      {/* Why Choose Us Summary */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The Green Space Interior Advantage
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              When you choose us, you&apos;re choosing a partner committed to
              excellence, sustainability, and your complete satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert team with 8+ years experience",
              "Sustainable and eco-friendly practices",
              "Personalized design solutions",
              "Quality materials and craftsmanship",
              "On-time project delivery",
              "Comprehensive after-sales support",
            ].map((point, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhyChooseUs;
