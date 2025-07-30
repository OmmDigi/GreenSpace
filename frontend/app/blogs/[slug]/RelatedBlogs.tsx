import { IBlogList } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  categories_id: number[];
  current_blog_id: number;
}

export default async function RelatedBlogs({
  categories_id,
  current_blog_id,
}: IProps) {
  const blogs = await axios.get<IBlogList[]>(
    `${
      process.env.CRM_HOST
    }/wp-json/custom/v1/posts?per_page=9&categories=${categories_id.join(
      ", "
    )}&exclude=${current_blog_id}`
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.data.map((rPost) => (
        <Link key={rPost.slug} href={`/blogs/${rPost.slug}`}>
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={rPost.thumbnail ?? "/placeholder_background.jpg"}
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
              <span>{rPost.date}</span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
