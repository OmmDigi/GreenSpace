import {
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/Button";
import ApplyJobForm from "./ApplyJobForm";
import Link from "next/link";

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Interior Designer",
      department: "Design",
      location: "Kolkata, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "We are looking for a creative and experienced Senior Interior Designer to join our team. You will be responsible for creating innovative interior design solutions for residential and commercial spaces.",
      requirements: [
        "Bachelor's degree in Interior Design or related field",
        "3+ years of experience in interior design",
        "Proficiency in AutoCAD, SketchUp, and 3D rendering software",
        "Strong portfolio demonstrating design skills",
        "Excellent communication and client management skills",
      ],
      responsibilities: [
        "Create comprehensive design concepts and presentations",
        "Collaborate with clients to understand their vision and requirements",
        "Develop detailed drawings and specifications",
        "Coordinate with contractors and vendors",
        "Manage multiple projects simultaneously",
      ],
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Operations",
      location: "Kolkata, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our operations team as a Project Manager to oversee interior design projects from conception to completion, ensuring quality delivery and client satisfaction.",
      requirements: [
        "Bachelor's degree in Project Management or related field",
        "2+ years of project management experience",
        "Experience in interior design or construction industry",
        "Strong organizational and leadership skills",
        "PMP certification preferred",
      ],
      responsibilities: [
        "Plan and execute interior design projects",
        "Coordinate with design teams and contractors",
        "Monitor project timelines and budgets",
        "Ensure quality standards are met",
        "Maintain client relationships",
      ],
    },
    {
      id: 3,
      title: "Junior Designer",
      department: "Design",
      location: "Kolkata, India",
      type: "Full-time",
      experience: "0-2 years",
      description:
        "Perfect opportunity for fresh graduates to start their career in interior design. Work with experienced designers and learn the latest design trends and techniques.",
      requirements: [
        "Bachelor's degree in Interior Design or Architecture",
        "Fresh graduate or 0-2 years of experience",
        "Basic knowledge of design software",
        "Creative mindset and attention to detail",
        "Eagerness to learn and grow",
      ],
      responsibilities: [
        "Assist senior designers in project development",
        "Create design drawings and mood boards",
        "Research materials and finishes",
        "Support client presentations",
        "Learn industry best practices",
      ],
    },
    {
      id: 4,
      title: "Sales Executive",
      department: "Sales",
      location: "Kolkata, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Join our sales team to help clients realize their dream homes. You will be responsible for generating leads, conducting consultations, and closing deals.",
      requirements: [
        "Bachelor's degree in any field",
        "1+ years of sales experience",
        "Excellent communication skills",
        "Knowledge of interior design industry preferred",
        "Target-oriented mindset",
      ],
      responsibilities: [
        "Generate and qualify leads",
        "Conduct client consultations",
        "Prepare and present proposals",
        "Negotiate contracts and close deals",
        "Maintain client relationships",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Package",
      description:
        "Attractive salary with performance-based incentives and annual appraisals",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and wellness programs for employees",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning & Growth",
      description:
        "Continuous learning opportunities and professional development programs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Team",
      description:
        "Work with passionate professionals in a collaborative environment",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#05b1a2] to-[#00524b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Creative Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Shape the future of interior design with GreenSpace Interior.
              Build your career while creating beautiful spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"#CurrentOpeningList"}
                className="bg-white text-[#00776e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </Link>
              <Link
                href={"/site-services"}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                See What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GreenSpace Interior?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in nurturing talent and providing an environment where
              creativity flourishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 text-[#00776e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="CurrentOpeningList" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect role and join our growing team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <Link href={`?position=${job.title}#applyJobForm`} className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
                    Apply Job
                    <ChevronRight className="w-4 h-4 transition-transform" />
                  </Link>

                  {/* {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-green-600 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-green-600 mt-1">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Apply for this position
                        </Button>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <ApplyJobForm jobOpenings={jobOpenings} />

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our HR team is here to help you with any queries about career
              opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="mailto:career@greenspaceinterior.in"
              >
                <Button>Email HR Team</Button>
              </Link>
              {/* <a
                href="tel:+919836677669"
              >
                <Button className="bg-transparent border border-yellow-400 hover:!bg-transparent">
                  Call Us Now
                </Button>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
