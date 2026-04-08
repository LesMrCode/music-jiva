import { useQuery } from "@tanstack/react-query";
import { IArtist } from "@/models/Artist";

async function fetchRecommendedArtists(): Promise<IArtist[]> {
  const res = await fetch("/api/artists");
  if (!res.ok) throw new Error("Failed to fetch artists");
  return res.json();
}

export function useRecommendedArtists() {
  return useQuery({
    queryKey: ["artists"],
    queryFn: fetchRecommendedArtists,
  });
}
