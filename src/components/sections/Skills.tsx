"use client";

import SectionHeading from "@/components/ui/SectionHeading";

type Skill = { name: string };

const skillGroups: { category: string; items: Skill[] }[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Cloudflare" },
      { name: "Vercel" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "VS Code" },
      { name: "Sourcetree" },
    ],
  },
  {
    category: "Concepts & Practices",
    items: [
      { name: "REST API Integration" },
      { name: "Resend API" },
      { name: "Responsive Design" },
      { name: "Input Validation" },
      { name: "XSS Protection" },
    ],
  },
];

export default function Skills() {
  return (
    /* Consistent section padding across all sections */
    <section id="skills" className="bg-white pt-8 pb-8 text-slate-950 sm:pt-12 sm:pb-12">
      {/* Outer wrapper keeping alignment completely consistent across your portfolio */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Skills"
          align="left"
          title="Core frontend stack."
          description="Technologies and development practices I use to build modern, reliable web applications."
        />

        {/* Spacing: mt-8 for heading-to-content gap, space-y-8 for category spacing */}
        <div className="mt-8 max-w-7xl space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              {/* Category Label */}
              <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600">
                {group.category}
              </h3>
              
              {/* Clean, Frameless Skill Badges mapping cleanly along the wide baseline */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="inline-flex items-center rounded-lg bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 border border-slate-200/50 hover:bg-slate-100/80 transition-colors duration-150"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}