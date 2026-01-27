import React from "react";
import {
  Share2,
  Gift,
  Star,
  Trophy,
  DollarSign,
  Calendar,
  ArrowRight,
  Home,
} from "lucide-react";
import Image from "next/image";
import ReferAndEarnForm from "./ReferAndEarnForm";

const ReferEarnPage = () => {
  // const referralCode = "GREENSPACE2025";

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(referralCode);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  const rewards = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "₹10,000 Cash Reward",
      description:
        "Earn ₹10,000 for every successful referral when your friend books a complete home interior project",
      amount: "₹10,000",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "₹7,000 for Kitchen",
      description:
        "Get ₹7,000 when your friend books a modular kitchen design with us",
      amount: "₹7,000",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "₹5,000 for Rooms",
      description:
        "Earn ₹5,000 for single room interior bookings through your referral",
      amount: "₹5,000",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Refer a Friend",
      description:
        "Refer your friends and family who need interior design services",
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Friend Books Service",
      description:
        "Your friend confirm the service booking with us, and confirmation ",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Earn Rewards",
      description:
        "Get rewarded instantly once your friend&apos;s project is confirmed and payment is made",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image: "/api/placeholder/60/60",
      earning: "₹15,000",
      referrals: 3,
      quote:
        "I&apos;ve earned ₹15,000 just by referring GreenSpace to my friends. The quality of work is amazing and the referral process is so simple!",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "/api/placeholder/60/60",
      earning: "₹8,000",
      referrals: 2,
      quote:
        "Referred my colleagues and earned ₹8,000! The team delivered exceptional results for both projects.",
    },
    {
      name: "Anita Singh",
      location: "Bangalore",
      image: "/api/placeholder/60/60",
      earning: "₹12,000",
      referrals: 4,
      quote:
        "Best referral program! Easy to share and generous rewards. My friends are happy with their beautiful interiors.",
    },
  ];

  const faqs = [
    {
      question: "How do I get my referral code?",
      answer:
        "Your unique referral code is automatically generated when you create an account with us. You can find it in your dashboard or on this page.",
    },
    {
      question: "When will I receive my reward?",
      answer:
        "You&apos;ll receive your reward within 7-10 business days after your friend&apos;s project is confirmed and the first payment is made.",
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer:
        "No, there&apos;s no limit! You can refer as many friends as you want and earn rewards for each successful referral.",
    },
    {
      question: "What if my friend doesn&apos;t mention my referral code?",
      answer:
        "Your friend must use your referral code during booking. If they forget, they can contact our support team within 24 hours of booking.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Section */}
      <Image
        className="w-full max-sm:hidden"
        src={"/refer-earn-banner.webp"}
        alt="Refer And Earn Banner"
        height={1080}
        width={1280}
      />

      <Image
        className="w-full hidden max-sm:block"
        src={"/refer-earn-banner-mobile.webp"}
        alt="Refer And Earn Banner"
        height={1080}
        width={1280}
      />

      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#edc93e] p-4 rounded-full">
                <Gift className="w-12 h-12 text-[#00776e]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refer & Earn Big Rewards
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Share the joy of beautiful interiors with your friends and earn up
              to ₹10,000 for each successful referral!
            </p>

            {/* Referral Code Display */}
            {/* <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-sm text-gray-200 mb-2">Your Referral Code</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/20 rounded-lg px-4 py-3 text-lg font-mono font-bold">
                  {referralCode}
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-[#edc93e] text-[#00776e] px-4 py-3 rounded-lg hover:bg-[#d4b332] transition-colors flex items-center gap-2"
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Earn Amazing Rewards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The more you refer, the more you earn. Here&apos;s what you can get for
              each successful referral
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-[#00776e]">
                  <div
                    className={`bg-gradient-to-r ${reward.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {reward.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {reward.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {reward.description}
                  </p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-[#00776e]">
                      {reward.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process to start earning rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="bg-[#00776e] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="bg-[#edc93e] p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-10 mb-6 text-[#00776e]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer a Friend Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Refer a Friend
            </h2>
            <p className="text-lg text-gray-600">
              Know someone who needs interior design services? Refer them now!
            </p>
          </div>

          <ReferAndEarnForm />
        </div>
      </section>

      {/* Share Options */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Code
            </h2>
            <p className="text-lg text-gray-600">
              Spread the word through your favorite platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "WhatsApp",
                icon: <MessageCircle className="w-6 h-6" />,
                color: "bg-green-500 hover:bg-green-600",
              },
              {
                name: "Facebook",
                icon: <Facebook className="w-6 h-6" />,
                color: "bg-blue-600 hover:bg-blue-700",
              },
              {
                name: "Twitter",
                icon: <Twitter className="w-6 h-6" />,
                color: "bg-blue-400 hover:bg-blue-500",
              },
              {
                name: "Email",
                icon: <Mail className="w-6 h-6" />,
                color: "bg-gray-600 hover:bg-gray-700",
              },
            ].map((platform, index) => (
              <button
                key={index}
                className={`${platform.color} text-white p-6 rounded-lg transition-colors flex flex-col items-center gap-3`}
              >
                {platform.icon}
                <span className="font-semibold">Share on {platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how our customers are earning through referrals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00776e] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    {/* <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p> */}
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <div className="bg-[#edc93e] text-[#00776e] px-3 py-1 rounded-full text-sm font-semibold">
                    Earned: {testimonial.earning}
                  </div>
                  <div className="bg-[#00776e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.referrals} Referrals
                  </div>
                </div>

                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>

                <div className="flex text-[#edc93e] mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our referral program
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-[#00776e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Earning Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are earning rewards by
            referring friends to GreenSpace Interior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#edc93e] text-[#00776e] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4b332] transition-colors">
              Share Your Code Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00776e] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ReferEarnPage;
