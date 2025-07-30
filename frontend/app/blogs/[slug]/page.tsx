import React from "react";
import { Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import "@/app/rich-text-content.css";
import axios from "axios";
import { ISingleBlog } from "@/types";
import RelatedBlogs from "./RelatedBlogs";
import { Metadata } from "next";

interface IProps {
  params: Promise<{ slug: string }>;
}

const getSingleBlog = async (slug: string) => {
  const WP_API_BASE = process.env.CRM_HOST + "/wp-json/custom/v1/posts/" + slug;
  return (await axios.get<ISingleBlog>(WP_API_BASE)).data;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ["slug"]: string }>;
}): Promise<Metadata> {
  const blogSlug = (await params)["slug"];
  const categoryPageInfo = await getSingleBlog(blogSlug);

  return {
    title: categoryPageInfo.rankmath_meta.seo_title,
    description: categoryPageInfo.rankmath_meta.seo_description,
    keywords: categoryPageInfo.rankmath_meta.meta_keywords,
    openGraph: {
      title: categoryPageInfo.rankmath_meta.og_title,
      description: categoryPageInfo.rankmath_meta.og_description,
      images: categoryPageInfo.rankmath_meta.og_image,
      url: `/blogs/${blogSlug}`,
      type: "article",
      locale: "en_US",
      siteName: "Greenspace",
    },
  };
}

const BlogSingle = async ({ params }: IProps) => {
  const slug = (await params).slug;
  const blogPost = await getSingleBlog(slug);

  if (blogPost === null) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex items-center gap-1 mb-6 text-sm text-gray-500 mt-1.5">
              <Calendar className="h-4 w-4" />
              <span>{blogPost.date}</span>
            </div>
            <Image
              src={blogPost.thumbnail ?? "/placeholder_background.jpg"}
              alt={blogPost.title}
              className="w-full h-full object-cover aspect-video rounded-3xl"
              height={1280}
              width={720}
            />
            <div
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: blogPost.content.rendered }}
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
            <React.Suspense
              fallback={<span className="block text-center">Loading..</span>}
            >
              <RelatedBlogs
                categories_id={blogPost.categories_id}
                current_blog_id={blogPost.id}
              />
            </React.Suspense>
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
