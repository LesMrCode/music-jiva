export default function DiscoverLoading() {
  return (
    <div className="px-6 md:px-10 py-8 max-w-screen-xl mx-auto animate-pulse">
      {/* Hero skeleton */}
      <div className="rounded-3xl bg-white/5 h-64 md:h-80 mb-10" />

      {/* Section skeletons */}
      {[1, 2, 3].map((s) => (
        <div key={s} className="mb-14">
          <div className="h-7 bg-white/5 rounded w-48 mb-6" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className="aspect-square rounded-2xl bg-white/5 mb-3" />
                <div className="h-4 bg-white/5 rounded mb-2 w-3/4" />
                <div className="h-3 bg-white/5 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
