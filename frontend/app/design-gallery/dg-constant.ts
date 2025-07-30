import { SERVICES } from "@/constant";
import { Category, GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [];

export const categories: Category[] = [
  { id: "all", name: "All Items" },
];

SERVICES.forEach((item) => {
  categories.push({
    id: item.id.toString(),
    name: item.name,
  });
});
