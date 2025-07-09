"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  ChevronRight,
  ChevronLeft,
  Filter,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const BlogListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Modern Kitchen Design Trends for 2025",
      excerpt:
        "Discover the latest kitchen design trends that are shaping modern homes. From smart appliances to sustainable materials, explore what's trending in kitchen design.",
      author: "Sarah Johnson",
      date: "2025-01-15",
      category: "Kitchen Design",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Transform Your Living Room with Interior Design Tips",
      excerpt:
        "Learn how to create a stunning living room that reflects your personality. Expert tips on color schemes, furniture placement, and decor selection.",
      author: "Michael Chen",
      date: "2025-01-12",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Maximizing Small Spaces: Design Solutions",
      excerpt:
        "Creative solutions for making the most of limited space. Innovative storage ideas and design techniques for small apartments and homes.",
      author: "Emily Rodriguez",
      date: "2025-01-10",
      category: "Small Spaces",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Sustainable Interior Design: Eco-Friendly Choices",
      excerpt:
        "Explore sustainable design practices that are good for both your home and the environment. Green materials and energy-efficient solutions.",
      author: "David Thompson",
      date: "2025-01-08",
      category: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=400&h=250&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Bedroom Design Ideas for Better Sleep",
      excerpt:
        "Create a peaceful bedroom sanctuary that promotes rest and relaxation. Color psychology and furniture arrangement for optimal sleep.",
      author: "Lisa Wang",
      date: "2025-01-05",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Bathroom Renovation: Modern Luxury Trends",
      excerpt:
        "Transform your bathroom into a spa-like retreat. Latest trends in bathroom fixtures, tiles, and lighting for a luxurious experience.",
      author: "Robert Kim",
      date: "2025-01-03",
      category: "Bathroom",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Color Psychology in Interior Design",
      excerpt:
        "Understanding how colors affect mood and behavior in interior spaces. Choose the right color palette for different rooms in your home.",
      author: "Anna Martinez",
      date: "2025-01-01",
      category: "Design Tips",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "Smart Home Integration in Modern Design",
      excerpt:
        "Seamlessly integrate smart technology into your home design. From lighting to security, discover how to blend tech with aesthetics.",
      author: "James Wilson",
      date: "2024-12-28",
      category: "Smart Homes",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      readTime: "9 min read",
    },
  ];

  const categories = [
    "All",
    "Kitchen Design",
    "Living Room",
    "Small Spaces",
    "Sustainability",
    "Bedroom",
    "Bathroom",
    "Design Tips",
    "Smart Homes",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-teal-600 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
            alt="Interior Design Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-600/85"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-teal-300/30 rounded-full"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-yellow-400/40 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-teal-300/30 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full text-sm mb-4">
                Interior Design Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Design Inspiration &
              <span className="block text-yellow-400">Expert Tips</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the latest trends, expert insights, and creative ideas to
              transform your space into something extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg
            className="relative block w-full h-16 md:h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,60 1200,60 L1200,120 L0,120 Z"
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        {/* <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <span className="text-teal-600 font-medium">
                    {post.readTime}
                  </span>
                </div>

                <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-teal-600 text-white"
                    : "text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get inspired by our blog posts and start your interior design
            journey today
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
