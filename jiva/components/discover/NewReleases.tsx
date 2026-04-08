"use client";

import Image from "next/image";
import { useNewReleases } from "@/hooks/useNewReleases";

function AlbumCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square rounded-2xl bg-white/5 mb-3" />
      <div className="h-4 bg-white/5 rounded mb-2 w-3/4" />
      <div className="h-3 bg-white/5 rounded w-1/2" />
    </div>
  );
}

export function NewReleases() {
  const { data: releases, isLoading, isError } = useNewReleases();

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-bold tracking-tight">New Releases</h2>
        <button className="text-sm text-white/40 hover:text-white transition-colors font-medium">
          See all
        </button>
      </div>

      {isError && (
        <p className="text-red-400 text-sm">Failed to load releases. Please try again.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <AlbumCardSkeleton key={i} />)
          : releases?.map((album) => (
              <div
                key={album._id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-white/5">
                  <Image
                    src={album.imageUrl}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF3CAC] flex items-center justify-center shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-white text-sm font-semibold truncate">{album.title}</p>
                <p className="text-white/40 text-xs truncate mt-0.5">{album.artist} · {album.genre}</p>
              </div>
            ))}
      </div>
    </section>
  );
}
