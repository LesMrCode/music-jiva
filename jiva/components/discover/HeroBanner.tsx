"use client";

export function HeroBanner() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 bg-gradient-to-br from-[#1a0a00] via-[#2d0f1f] to-[#0a0a1a] mb-10">
      {/* Gradient orbs */}
      <div className="absolute top-[-40px] left-[-40px] w-72 h-72 rounded-full bg-[#FF6B35]/30 blur-3xl" />
      <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 rounded-full bg-[#FF3CAC]/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#7B2FBE]/20 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
        <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2">
          Good evening
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-4 leading-none">
          What are we<br />listening to?
        </h1>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF3CAC] text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#FF3CAC]/20">
            Play Mix
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors backdrop-blur-sm">
            Browse All
          </button>
        </div>
      </div>
    </div>
  );
}
