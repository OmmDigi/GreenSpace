import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";

import axios from "axios";
import Link from "next/link";
import { IBlogList } from "@/types";
import Pagination from "@/components/Pagination";

const BlogListing: React.FC = async () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 12;

  // const categories = [
  //   "All",
  //   "Kitchen Design",
  //   "Living Room",
  //   "Small Spaces",
  //   "Sustainability",
  //   "Bedroom",
  //   "Bathroom",
  //   "Design Tips",
  //   "Smart Homes",
  // ];

  // const filteredPosts = blogPosts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory =
  //     selectedCategory === "All" || post.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  // const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  // const startIndex = (currentPage - 1) * postsPerPage;
  // const currentPosts = filteredPosts.slice(
  //   startIndex,
  //   startIndex + postsPerPage
  // );
  const blogs = await axios.get<IBlogList[]>(
    `${process.env.CRM_HOST}/wp-json/custom/v1/posts?per_page=12`
  );

  const totlaPages = Number(blogs.headers["x-wp-totalpages"]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-teal-600 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/BlogPageFetcher.jpg"
            alt="Interior Design Blog"
            className="w-full h-full object-cover"
            height={1920}
            width={1080}
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
                {/* Interior Design Blog */}
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
          {blogs.data.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={blog.thumbnail ?? "/placeholder_background.jpg"}
                    alt="Featured"
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.categories_name[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2
                    // dangerouslySetInnerHTML={{
                    //   __html: `${blog.title.rendered}`,
                    // }}
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors"
                  >
                    {blog.title}
                  </h2>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${blog.short_description}`,
                    }}
                    className="text-gray-600 mb-4 line-clamp-3"
                  ></p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      {/* <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{blog._embedded?.author?.[0]?.name}</span>
                      </div> */}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    {/* <span className="text-teal-600 font-medium">
                    {post.readTime}
                  </span> */}
                  </div>

                  <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination page={1} totalPage={totlaPages} />
      </div>

      {/* Call to Action Section */}
      {/* <div className="bg-teal-600 text-white py-16">
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
      </div> */}
    </div>
  );
};

export default BlogListing;
