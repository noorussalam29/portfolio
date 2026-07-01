"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-8 dark:border-[#1F2937] dark:bg-[#030712]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Mohamed Noorus Salam. Frontend Developer.</p>
        <p>Built with React, Next.js, TypeScript, and a deliberate focus on clarity.</p>
      </div>
    </footer>
  );
}
