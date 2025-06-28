import { extractYoutubeId } from "./extractYoutubeId";

export function extractYouTubeThumbnail(url: string, image?: string): string {
  const youtubeID = extractYoutubeId(url);

  if (youtubeID) {
    return `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`;
  }

  return image ?? "/placeholder-image.jpg";
}
