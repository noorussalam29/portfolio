"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 sm:py-12 text-slate-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left Side: Full Name & Title */}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-900 tracking-wide">
            Mohamed Noorus Salam
          </p>
          <p className="text-xs text-slate-500">
            Frontend Developer
          </p>
        </div>

        {/* Right Side: Copyright Clean Badge */}
        <div className="text-xs font-mono tracking-[0.2em] text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
          &copy; {new Date().getFullYear()} &bull; ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  );
}