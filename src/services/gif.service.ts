import type { Gif, GifRating } from "../models/gif.interface";
import { normalizeText } from "../utils/text";

function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [gif.title, gif.username ?? "", ...gif.tags].join(" ");

  return normalizeText(searchableText).includes(query);
}

export function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);

  if (!query) {
    return [...collection];
  }

  return collection.filter((gif) => matchesQuery(gif, query));
}

export function filterGifsByRating(
  collection: Gif[],
  rating: GifRating | "all",
): Gif[] {
  if (rating === "all") {
    return [...collection];
  }

  return collection.filter((gif) => gif.rating === rating);
}

export function findGifById(collection: Gif[], id: string): Gif | undefined {
  return collection.find((gif) => gif.id === id);
}
