import { HeroBanner } from "@/components/discover/HeroBanner";
import { NewReleases } from "@/components/discover/NewReleases";
import { RecommendedArtists } from "@/components/discover/RecommendedArtists";
import { TrendingPlaylists } from "@/components/discover/TrendingPlaylists";

export default function DiscoverPage() {
  return (
    <div className="px-6 md:px-10 py-8 max-w-screen-xl mx-auto">
      <HeroBanner />
      <div className="flex flex-col gap-14">
        <NewReleases />
        <RecommendedArtists />
        <TrendingPlaylists />
      </div>
    </div>
  );
}
