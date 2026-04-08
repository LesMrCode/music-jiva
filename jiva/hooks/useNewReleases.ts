import { useQuery } from "@tanstack/react-query";
import { IAlbum } from "@/models/Album";

async function fetchNewReleases(): Promise<IAlbum[]> {
  const res = await fetch("/api/releases");
  if (!res.ok) throw new Error("Failed to fetch new releases");
  return res.json();
}

export function useNewReleases() {
  return useQuery({
    queryKey: ["releases"],
    queryFn: fetchNewReleases,
  });
}
