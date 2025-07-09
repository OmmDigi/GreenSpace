import React from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { getBlogBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import "@/app/rich-text-content.css";
import Link from "next/link";

interface IProps {
  params: Promise<{ slug: string }>;
}

const BlogSingle = async ({ params }: IProps) => {
  const slug = (await params).slug;
  const blogPost = await getBlogBySlug(slug);

  if (blogPost === null) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white py-16 md:py-20">
        <button className="absolute left-3.5 top-2 z-50 flex items-center text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </button>
        <div className="absolute inset-0 z-0">
          <Image
            src={blogPost.featuredImage || "/placeholder_background.jpg"}
            alt={blogPost.title}
            className="w-full h-full object-cover"
            height={1280}
            width={720}
          />
          <div className="absolute inset-0 bg-teal-600/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full text-sm mb-4">
                {/* {blogPost} */}
                {/* Category */}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: `${blogPost.excerpt}` }}
              className="text-xl text-teal-100 mb-8 leading-relaxed"
            ></p>

            {/* Article Meta */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-teal-100">
              <div className="flex items-center gap-2">
                {/* <Image
                  src={blogPost.authorAvatar}
                  alt={blogPost.author}
                  className="w-8 h-8 rounded-full"
                  fill
                /> */}
                {/* <span>{blogPost.}</span> */}
                {/* <span>Green Space</span> */}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              {/* <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{blogPost.totalViews} views</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Social Actions */}
          {/* <div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isLiked
                    ? "bg-red-50 text-red-600"
                    : "bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span>{blogPost.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isBookmarked
                    ? "bg-teal-50 text-teal-600"
                    : "bg-gray-50 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                <Bookmark
                  className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`}
                />
                <span>Save</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Share:</span>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div> */}

          {/* Article Content */}
          {/* <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Evolution of Modern Kitchen Design
              </h2>
              <p className="text-gray-700 mb-6">
                The kitchen has evolved from a purely functional space to the
                heart of the modern home. In 2025, we're seeing exciting trends
                that blend technology, sustainability, and aesthetic appeal to
                create spaces that are both beautiful and highly functional.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Smart Technology Integration
              </h3>
              <p className="text-gray-700 mb-6">
                Smart appliances are no longer a luxury but a necessity in
                modern kitchen design. From refrigerators that can create
                shopping lists to ovens that can be controlled remotely,
                technology is making our kitchens more efficient and
                user-friendly. Voice-activated assistants, smart lighting
                systems, and automated water filtration are becoming standard
                features.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Sustainable Materials and Eco-Friendly Solutions
              </h3>
              <p className="text-gray-700 mb-6">
                Sustainability is at the forefront of kitchen design trends.
                Homeowners are increasingly choosing recycled materials,
                energy-efficient appliances, and locally sourced components.
                Bamboo countertops, reclaimed wood cabinets, and low-VOC paints
                are popular choices that reduce environmental impact while
                maintaining style.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Bold Color Palettes and Mixed Textures
              </h3>
              <p className="text-gray-700 mb-6">
                Gone are the days of all-white kitchens. 2025 brings bold, rich
                colors like deep emerald green, navy blue, and warm terracotta.
                These colors are being paired with mixed textures - think matte
                black fixtures with glossy subway tiles, or rough-hewn wood
                paired with sleek stainless steel.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Open Shelving and Minimalist Storage
              </h3>
              <p className="text-gray-700 mb-6">
                Open shelving continues to be popular, but with a twist. The
                trend is moving towards curated, minimalist displays that
                showcase beautiful dishware and accessories while maintaining
                functionality. Hidden storage solutions and pull-out organizers
                help keep the space clutter-free.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Statement Lighting and Architectural Details
              </h3>
              <p className="text-gray-700 mb-6">
                Lighting has become a key design element, with oversized pendant
                lights, under-cabinet LED strips, and statement chandeliers
                creating ambiance and functionality. Architectural details like
                coffered ceilings, decorative molding, and unique backsplash
                patterns add character and visual interest.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Implementing These Trends in Your Kitchen
              </h2>
              <p className="text-gray-700 mb-6">
                When incorporating these trends into your kitchen design,
                consider your lifestyle, budget, and the overall aesthetic of
                your home. Start with one or two elements that resonate with
                you, and build from there. Remember that the best kitchen design
                is one that reflects your personal style while meeting your
                functional needs.
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
                <h4 className="text-lg font-semibold text-teal-900 mb-2">
                  Pro Tip
                </h4>
                <p className="text-teal-800">
                  Before making any major changes, create a mood board with
                  colors, materials, and styles that inspire you. This will help
                  ensure consistency throughout your design process and prevent
                  costly mistakes.
                </p>
              </div>
            </div>
          </div> */}

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: `${blogPost.content}` }}
            ></div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm hover:bg-teal-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-start gap-4">
              <img
                src={blogPost.authorAvatar}
                alt={blogPost.author}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About {blogPost.author}
                </h3>
                <p className="text-gray-700 mb-4">{blogPost.authorBio}</p>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Comments Section */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Comments ({comments.length})
              </h3>
              <button
                onClick={() => setShowCommentForm(!showCommentForm)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Add Comment
              </button>
            </div>

            {showCommentForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={newCommentAuthor}
                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Write your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleComment}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Post Comment
                  </button>
                  <button
                    onClick={() => setShowCommentForm(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-4">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {comment.author}
                      </h4>
                      <span className="text-gray-500 text-sm">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Related Posts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPost.related.map((rPost) => (
                <Link key={rPost.slug} href={`/blogs/${rPost.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={
                          rPost.featuredImage || "/placeholder_background.jpg"
                        }
                        alt={rPost.title}
                        height={1280}
                        width={1280}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{formatDate(rPost.date)}</span>
                      {/* <span>{post.readTime}</span> */}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get expert advice and turn your kitchen dreams into reality with our
            professional design services
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSingle;
