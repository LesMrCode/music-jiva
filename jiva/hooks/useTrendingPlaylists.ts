import { useQuery } from "@tanstack/react-query";
import { IPlaylist } from "@/models/Playlist";

async function fetchTrendingPlaylists(): Promise<IPlaylist[]> {
  const res = await fetch("/api/playlists");
  if (!res.ok) throw new Error("Failed to fetch playlists");
  return res.json();
}

export function useTrendingPlaylists() {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: fetchTrendingPlaylists,
  });
}
