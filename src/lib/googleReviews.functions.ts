import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string | undefined;
};

export type GoogleReviewsPayload = {
  averageRating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  live: boolean;
};

type CacheEntry = { at: number; data: GoogleReviewsPayload };
let cache: CacheEntry | null = null;
const TTL = 1000 * 60 * 60 * 6; // 6h

const BUSINESS_QUERY = "Photo Surf Pays Basque photographe surf Anglet";

const formatDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const s = d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsPayload> => {
    const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
    if (!apiKey) return { averageRating: 0, totalReviews: 0, reviews: [], live: false };

    if (cache && Date.now() - cache.at < TTL) return cache.data;

    try {
      let placeId = process.env["GOOGLE_PLACE_ID"];

      if (!placeId) {
        const searchRes = await fetch("https://places.googleapis.com/v1/places:searchText", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "places.id",
          },
          body: JSON.stringify({ textQuery: BUSINESS_QUERY, languageCode: "fr" }),
        });
        const searchJson = (await searchRes.json()) as { places?: Array<{ id: string }> };
        placeId = searchJson.places?.[0]?.id;
      }

      if (!placeId) return { averageRating: 0, totalReviews: 0, reviews: [], live: false };

      const detailsRes = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`,
        {
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
        },
      );
      const details = (await detailsRes.json()) as {
        rating?: number;
        userRatingCount?: number;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          publishTime?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const reviews: GoogleReview[] = (details.reviews ?? [])
        .filter((r) => (r.text?.text ?? r.originalText?.text ?? "").trim().length > 0)
        .slice(0, 6)
        .map((r) => ({
          name: r.authorAttribution?.displayName ?? "Client Google",
          rating: Math.round(r.rating ?? 5),
          text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
          date: formatDate(r.publishTime),
          profilePhoto: r.authorAttribution?.photoUri,
        }));

      const data: GoogleReviewsPayload = {
        averageRating: details.rating ?? 0,
        totalReviews: details.userRatingCount ?? reviews.length,
        reviews,
        live: reviews.length > 0,
      };

      cache = { at: Date.now(), data };
      return data;
    } catch {
      return { averageRating: 0, totalReviews: 0, reviews: [], live: false };
    }
  },
);
