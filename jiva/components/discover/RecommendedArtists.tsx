"use client";

import Image from "next/image";
import { useRecommendedArtists } from "@/hooks/useRecommendedArtists";

function ArtistCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-3">
      <div className="w-24 h-24 rounded-full bg-white/5" />
      <div className="h-4 bg-white/5 rounded w-20" />
      <div className="h-3 bg-white/5 rounded w-14" />
    </div>
  );
}

function formatListeners(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

export function RecommendedArtists() {
  const { data: artists, isLoading, isError } = useRecommendedArtists();

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-bold tracking-tight">Recommended Artists</h2>
        <button className="text-sm text-white/40 hover:text-white transition-colors font-medium">
          See all
        </button>
      </div>

      {isError && (
        <p className="text-red-400 text-sm">Failed to load artists. Please try again.</p>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <ArtistCardSkeleton key={i} />)
          : artists?.map((artist) => (
              <div
                key={artist._id}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-[#FF6B35] transition-all duration-300 bg-white/5">
                  <Image
                    src={artist.imageUrl}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>
                <div className="flex items-center gap-1 mb-0.5">
                  <p className="text-white text-sm font-semibold truncate max-w-[80px]">{artist.name}</p>
                  {artist.verified && (
                    <svg className="w-4 h-4 text-[#FF6B35] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                <p className="text-white/40 text-xs">{artist.genre}</p>
                <p className="text-white/25 text-xs mt-0.5">{formatListeners(artist.monthlyListeners)} listeners</p>
              </div>
            ))}
      </div>
    </section>
  );
}
