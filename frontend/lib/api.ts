import { BlogPost, RelatedBlog } from "@/types";
import axios from "axios";

import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const WP_API_BASE = process.env.CRM_HOST + "/wp-json/wp/v2";

  try {
    const { data } = await axios.get(`${WP_API_BASE}/posts`, {
      params: { slug, _embed: true },
      httpsAgent,
    });

    if (!data || data.length === 0) return null;

    const post = data[0];

    const featuredImage =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    const tagIds: number[] = post.tags || [];

    const tagNames = await Promise.all(
      tagIds.map(async (tagId) => {
        const res = await axios.get(`${WP_API_BASE}/tags/${tagId}`, {
          httpsAgent,
        });
        return res.data.name;
      })
    );

    // Get total views (optional - needs to be a registered meta field)
    const metaRes = await axios.get(`${WP_API_BASE}/posts/${post.id}`, {
      httpsAgent,
    });
    const totalViews = metaRes.data.meta?.total_views || 0;

    // Fetch related posts by tag
    let related: RelatedBlog[] = [];
    if (tagIds.length > 0) {
      const { data: relatedPosts } = await axios.get(`${WP_API_BASE}/posts`, {
        params: {
          tags: tagIds[0], // use the first tag
          per_page: 4,
          _embed: true,
        },
        httpsAgent,
      });

      related = relatedPosts
        .filter((p: any) => p.id !== post.id)
        .slice(0, 3)
        .map((p: any) => ({
          title: p.title.rendered,
          slug: p.slug,
          date : p.date,
          featuredImage:
            p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        }));
    }

    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      featuredImage,
      tags: tagNames,
      totalViews,
      related,
    };
  } catch (error) {
    console.error("Failed to fetch blog by slug:", error);
    return null;
  }
};
