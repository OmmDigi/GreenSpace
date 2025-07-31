export interface INav {
  id: string | number;
  name: string;
  slug: string;
  submenu?: INav[];
}

// Types
export interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  videoSrc?: string;
  category: string;
  title: string;
  description: string;
  slug?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface IGalleryDialogContext {
  galleryItem: GalleryItem;
  isOpen: boolean;
}

export interface IOurProject {
  id: number;
  title: string;
  location: string;
  area: string;
  completedDate: string;
  client: string;
  category: string;
  description: string;
  images: string[];
  featured: boolean;
  budget: string;
  duration: string;
  style: string;
  rating: number;
  highlights: string[];
}

export interface IGetQuoteDialog<T = any> {
  isOpen: boolean;
  extraValue?: T;
}

export type TVideoState = "playing" | "pause" | "stop";

export type ResponseApi<T> = {
  status: number;
  success: boolean;
  message: string;
  key: string;
  data: T;
};

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface GalleryDialogProps {
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export interface IJObList {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface IBlogList {
  id: number;
  title: string;
  slug: string;
  date: string;
  thumbnail: string | null;
  short_description: string;
  categories_name: string[];
  categories_id: number[];
}

export interface ISingleBlog extends IBlogList {
  content: {
    rendered: string;
  };

  tags: string[];
  rankmath_meta: {
    focus_keyword: string;
    seo_title: string;
    seo_description: string;
    canonical_url: string;
    robots_meta: string;
    advanced_robots: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    breadcrumb_title: string;
    pillar_content: string;
    cornerstone_content: string;
    meta_keywords: string;
  };
}

export interface RelatedBlog {
  title: string;
  slug: string;
  date: string;
  featuredImage: string | null;
}

export interface IMultipForm {
  floorPlan: string;
  budget: string;
  requirements: string[];
  name: string;
  phone: string;
  email: string;
  location: string;
}

export interface ICompeltedProjects {
  service_id: string;
  title: string;
  images: { src: string; alt: string }[];
  description?:string;
}