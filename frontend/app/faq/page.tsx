"use client";

import React, { useState } from 'react';
import { ChevronDown, Search, Phone, Mail, MessageCircle, Clock, Home, Palette, Wrench, CreditCard } from 'lucide-react';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: <Home className="w-5 h-5" /> },
    { id: 'design', name: 'Design Process', icon: <Palette className="w-5 h-5" /> },
    { id: 'services', name: 'Services', icon: <Wrench className="w-5 h-5" /> },
    { id: 'pricing', name: 'Pricing & Payment', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'timeline', name: 'Timeline', icon: <Clock className="w-5 h-5" /> }
  ];

  const faqData : any = {
    general: [
      {
        id: 1,
        question: "What services does GreenSpace Interior offer?",
        answer: "We offer comprehensive interior design services including modular kitchen designs, living room designs, bedroom designs, wardrobe designs, dining room designs, pooja room designs, bathroom designs, and complete home interior solutions for 1BHK, 2BHK, and 3BHK apartments."
      },
      {
        id: 2,
        question: "Do you provide both residential and commercial interior design services?",
        answer: "Yes, we specialize in both residential and commercial interior design. Our residential services include complete home interiors, while our commercial services cover office spaces, retail outlets, restaurants, and other commercial establishments."
      },
      {
        id: 3,
        question: "What areas do you serve?",
        answer: "We currently serve major cities across India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and Kolkata. We also take on select projects in other cities based on project scope and requirements."
      },
      {
        id: 4,
        question: "How experienced is your team?",
        answer: "Our team consists of highly experienced interior designers, project managers, and skilled craftsmen with over 10 years of combined experience in the interior design industry. We have successfully completed 500+ projects across various categories."
      },
      {
        id: 5,
        question: "Do you provide free consultations?",
        answer: "Yes, we offer free initial consultations where our design experts visit your space, understand your requirements, and provide preliminary design suggestions. This helps you make an informed decision before proceeding with the full project."
      }
    ],
    design: [
      {
        id: 6,
        question: "What is your design process?",
        answer: "Our design process consists of 6 stages: 1) Initial consultation and site visit, 2) Concept development and mood boards, 3) Detailed design and 3D visualization, 4) Material selection and finalization, 5) Execution and project management, 6) Final styling and handover."
      },
      {
        id: 7,
        question: "Do you provide 3D visualizations?",
        answer: "Yes, we provide detailed 3D visualizations and renderings for all our projects. This helps you visualize the final outcome before execution begins and make any necessary changes to the design."
      },
      {
        id: 8,
        question: "Can I make changes to the design after approval?",
        answer: "Minor changes can be accommodated during the execution phase, but major design changes may affect the timeline and cost. We recommend finalizing all design aspects during the design phase to avoid delays and additional costs."
      },
      {
        id: 9,
        question: "Do you work with existing furniture?",
        answer: "Absolutely! We can incorporate your existing furniture and décor items into the new design. Our designers will assess your current pieces and suggest how they can be integrated or refurbished to fit the new design scheme."
      },
      {
        id: 10,
        question: "What design styles do you specialize in?",
        answer: "We specialize in various design styles including Contemporary, Modern, Traditional, Scandinavian, Industrial, Minimalist, and Indo-Western fusion. Our team can also create custom design styles based on your preferences."
      }
    ],
    services: [
      {
        id: 11,
        question: "What is included in your modular kitchen service?",
        answer: "Our modular kitchen service includes kitchen design, cabinet installation, countertop installation, appliance integration, electrical and plumbing coordination, storage solutions, and complete kitchen accessories. We also provide a 5-year warranty on all modular components."
      },
      {
        id: 12,
        question: "Do you provide civil work services?",
        answer: "Yes, we provide comprehensive civil work services including false ceiling, electrical work, plumbing, flooring, wall painting, tile work, and other structural modifications required for your interior project."
      },
      {
        id: 13,
        question: "What warranty do you provide?",
        answer: "We provide a 5-year warranty on modular components, 2-year warranty on civil work, and 1-year warranty on accessories and fittings. Our warranty covers manufacturing defects and workmanship issues."
      },
      {
        id: 14,
        question: "Do you provide maintenance services?",
        answer: "Yes, we offer annual maintenance contracts (AMC) to keep your interiors in perfect condition. Our maintenance services include cleaning, minor repairs, touch-ups, and replacement of worn-out components."
      },
      {
        id: 15,
        question: "Can you work within my budget?",
        answer: "Yes, we work with various budget ranges and can customize our services accordingly. During the initial consultation, we discuss your budget and provide design solutions that maximize value within your financial constraints."
      }
    ],
    pricing: [
      {
        id: 16,
        question: "How do you calculate project costs?",
        answer: "Project costs are calculated based on the scope of work, materials selected, space size, design complexity, and timeline. We provide detailed quotations with itemized costs for complete transparency."
      },
      {
        id: 17,
        question: "What payment terms do you offer?",
        answer: "We follow a milestone-based payment structure: 20% advance payment, 30% on design approval, 30% on material procurement, and 20% on project completion. We accept all major payment methods including cash, cheque, and online transfers."
      },
      {
        id: 18,
        question: "Do you offer any discounts or packages?",
        answer: "Yes, we regularly offer seasonal discounts and special packages. Currently, we have a 25% discount on modular interiors. We also provide attractive packages for complete home interior projects."
      },
      {
        id: 19,
        question: "Are there any hidden costs?",
        answer: "No, we believe in complete transparency. All costs are clearly mentioned in our detailed quotation. Any additional work requested by the client is discussed and approved before execution with clear cost implications."
      },
      {
        id: 20,
        question: "Do you provide EMI options?",
        answer: "Yes, we have partnered with leading financial institutions to provide easy EMI options. You can choose from 6, 12, 18, or 24-month EMI plans with competitive interest rates."
      }
    ],
    timeline: [
      {
        id: 21,
        question: "How long does a typical project take?",
        answer: "Timeline depends on project scope. A modular kitchen typically takes 15-20 days, a complete room takes 3-4 weeks, and a full home interior takes 6-8 weeks. We provide detailed project timelines during the planning phase."
      },
      {
        id: 22,
        question: "What factors can affect project timeline?",
        answer: "Factors that can affect timeline include design complexity, material availability, civil work requirements, client approval delays, site accessibility, and weather conditions. We factor in buffer time for most projects."
      },
      {
        id: 23,
        question: "Do you work on weekends?",
        answer: "Yes, we work on weekends and holidays to minimize disruption to your daily routine. Our team is flexible and can adjust working hours based on your convenience and project requirements."
      },
      {
        id: 24,
        question: "What happens if the project gets delayed?",
        answer: "In case of delays due to our team, we provide compensation as per our service agreement. However, delays due to client approvals, material changes, or external factors are handled with mutual consultation and revised timelines."
      },
      {
        id: 25,
        question: "Can I track my project progress?",
        answer: "Yes, we provide regular project updates through photos, videos, and progress reports. You can also visit the site anytime to check progress. We maintain complete transparency throughout the project execution."
      }
    ]
  };

  const filteredFAQs = (faqData[activeCategory as any]).filter((faq : any) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id : any) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#05b1a2] to-[#00524b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our interior design services, 
              processes, and policies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative bg-white rounded-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for questions..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-[#049e913b] text-green-700 border-l-4 border-green-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categories.find(cat => cat.id === activeCategory)?.name} Questions
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                  </p>
                </div>

                <div className="divide-y divide-gray-200">
                  {filteredFAQs.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg">No questions found matching your search.</p>
                      <p className="text-sm mt-2">Try adjusting your search terms or browse other categories.</p>
                    </div>
                  ) : (
                    filteredFAQs.map((faq : any) => (
                      <div key={faq.id} className="p-6">
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full flex items-center justify-between text-left group"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                              expandedFAQ === faq.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {expandedFAQ === faq.id && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you with any questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <a
                href="tel:+919836677669"
                className="bg-gradient-to-tl from-[#f3d662] to-[#e9c01d] text-black px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                +91 9836 6776 69
              </a>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed answers via email</p>
              <a
                href="mailto:info@greenspaceinterior.in"
                className="bg-gradient-to-tl from-[#f3d662] to-[#e9c01d] text-black px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Whatsapp Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <a href='https://wa.me/9804220277' className="bg-gradient-to-tl from-[#f3d662] to-[#e9c01d] text-black px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600">
              Explore more about our services and offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Design Gallery', description: 'View our portfolio of completed projects' },
              { title: 'Book Consultation', description: 'Schedule a free consultation with our experts' },
              { title: 'Get Quote', description: 'Request a detailed quote for your project' },
              { title: 'Our Services', description: 'Learn about all our interior design services' }
            ].map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                  Learn More
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FAQPage;