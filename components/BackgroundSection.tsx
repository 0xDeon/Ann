"use client";

const HEADER_HEIGHT = 60;

const items = [
  {
    stat: "02",
    label: "Countries",
    content: (
      <div>
        <div className="flex gap-3 mb-10">
          <span className="text-4xl">🇳🇬</span>
          <span className="text-4xl">🇬🇧</span>
        </div>
        <p className="text-[30px] leading-[1.45] text-black font-medium font-heading">
          Born and raised in Lagos, Nigeria, I&apos;ve spent the last few years
          establishing my life and career in the UK. Currently, I work as an
          independent consultant helping startups scale their operations and
          communities.
        </p>
        <p className="mt-12 text-[30px] leading-[1.45] text-black font-medium font-heading">
          When I&apos;m not building systems for work, you&apos;ll find me
          documenting new workflows for fun, or designing aesthetic templates
          for the community.
        </p>
      </div>
    ),
  },
  {
    stat: "5+",
    label: "Years in the industry",
    content: (
      <div className="grid grid-cols-3 gap-x-20 text-[24px] font-heading">
        <div className="space-y-6 text-[#999] font-light tabular-nums">
          <p>2020 - 2022</p>
          <p>2022 - 2023</p>
          <p>2023 - 2024</p>
          <p>2024 - 2025</p>
          <p>2025 - Present</p>
        </div>
        <div className="space-y-6 font-medium text-black">
          <p>Startup Lab</p>
          <p>Growth Circle</p>
          <p>DevDAO Africa</p>
          <p>ApeX Ventures</p>
          <p>Freelance</p>
        </div>
        <div className="space-y-6 text-[#999] font-light">
          <p>Ops Associate</p>
          <p>Community Manager</p>
          <p>Head of Community</p>
          <p>Operations Lead</p>
          <p>Operations Partner</p>
        </div>
      </div>
    ),
  },
  {
    stat: "50+",
    label: "Collaborations",
    content: (
      <div>
        <p className="text-[30px] leading-[1.45] text-black font-medium font-heading">
          I team up with companies, big and small, spanning all sorts of
          industries, each redefining how we live, work, and interact with the
          world.
        </p>
        <p className="mt-12 text-[30px] leading-[1.45] text-black font-medium font-heading">
          Whether it&apos;s helping startups find their voice or keeping
          established brands relevant, my role is to{" "}
          <span className="italic">
            align every aspect of their presence with who they are
          </span>
          —through strategy, design, and storytelling.
        </p>
      </div>
    ),
  },
  {
    stat: "10K+",
    label: "Hours invested",
    content: (
      <div className="flex flex-wrap gap-x-12 gap-y-5 text-[24px] text-[#999] font-light font-heading">
        <span>Operational Systems</span>
        <span>Process Automation</span>
        <span>Design Systems</span>
        <span>Technical Docs</span>
        <span>Community Ops</span>
        <span>Workflow Design</span>
        <span>Founder Support</span>
      </div>
    ),
  },
];

export default function BackgroundSection() {
  return (
    <section className="relative bg-[#FAFAFA]">
      {/* Section heading */}
      <div className="px-6 sm:px-12 md:px-24 pt-28 pb-16">
        <h2 className="text-[2.5rem] leading-[1.1] font-heading font-light tracking-tighter text-[#171717] sm:text-6xl lg:text-7xl">
          If you&apos;re still scrolling, here&apos;s{" "}
          <br className="hidden md:block" /> my background
        </h2>
      </div>

      <div className="relative">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="sticky min-h-screen bg-[#FAFAFA]"
            style={{
              top: i * HEADER_HEIGHT,
              zIndex: i + 1,
            }}
          >
            {/* Header bar */}
            <div className="border-t border-b border-zinc-300 px-6 sm:px-12 md:px-24 py-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#171717] text-white text-[13px] font-bold px-3 py-1 rounded-full tabular-nums">
                  {item.stat}
                </span>
                <span className="text-[19px] font-medium tracking-tight text-[#171717]">
                  {item.label}
                </span>
              </div>
            </div>

            {/* Content area */}
            <div className="px-6 sm:px-12 md:px-24 pt-16 pb-24 bg-[#FAFAFA]">
              <div className="max-w-3xl ml-auto">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
