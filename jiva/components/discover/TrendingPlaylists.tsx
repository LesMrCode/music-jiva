"use client";

import Image from "next/image";
import { useTrendingPlaylists } from "@/hooks/useTrendingPlaylists";

function PlaylistCardSkeleton() {
  return (
    <div className="animate-pulse flex gap-4 items-center p-3 rounded-2xl bg-white/5">
      <div className="w-14 h-14 rounded-xl bg-white/10 flex-shrink-0" />
      <div className="flex-1">
        <div className="h-4 bg-white/10 rounded mb-2 w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/2" />
      </div>
    </div>
  );
}

function formatPlays(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M plays`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K plays`;
  return `${n} plays`;
}

export function TrendingPlaylists() {
  const { data: playlists, isLoading, isError } = useTrendingPlaylists();

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-bold tracking-tight">Trending Playlists</h2>
        <button className="text-sm text-white/40 hover:text-white transition-colors font-medium">
          See all
        </button>
      </div>

      {isError && (
        <p className="text-red-400 text-sm">Failed to load playlists. Please try again.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <PlaylistCardSkeleton key={i} />)
          : playlists?.map((playlist, index) => (
              <div
                key={playlist._id}
                className="group flex gap-4 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                {/* Rank */}
                <span className="text-white/20 text-sm font-bold w-5 text-center flex-shrink-0">
                  {index + 1}
                </span>

                {/* Artwork */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
                  <Image
                    src={playlist.imageUrl}
                    alt={playlist.title}
                    width={56}
                    height={56}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{playlist.title}</p>
                  <p className="text-white/40 text-xs truncate mt-0.5">{playlist.description}</p>
                  <p className="text-white/25 text-xs mt-1">{playlist.trackCount} tracks · {formatPlays(playlist.plays)}</p>
                </div>

                {/* Play button */}
                <button className="w-9 h-9 rounded-full bg-white/0 group-hover:bg-gradient-to-br group-hover:from-[#FF6B35] group-hover:to-[#FF3CAC] flex items-center justify-center flex-shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            ))}
      </div>
    </section>
  );
}
