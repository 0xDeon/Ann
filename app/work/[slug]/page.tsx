import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ann Anidumaka`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isYouTube = !!project.youtubeId;
  const isVideo = project.categories.includes("Videos");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Back link */}
      <div className="px-6 pb-6 sm:px-12 md:px-16 lg:px-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-[#4A1942]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to work
        </Link>
      </div>

      {/* Hero image / YouTube embed */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-sm" style={{ background: project.bg }}>
          {isYouTube ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            <div className="relative aspect-square w-full">
              <>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover scale-110 blur-xl opacity-60"
                  sizes="672px"
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="672px"
                  priority
                />
              </>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16 sm:px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">

          {/* Left — main content */}
          <div>
            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {/* Full description paragraphs */}
            <div className="mt-10 space-y-5">
              {project.fullDescription.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-[#555]">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA — external link */}
            {project.link && project.link !== "#" && !isVideo && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#4A1942] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#2C0D28]"
              >
                View live
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>

          {/* Right — metadata */}
          <div className="flex flex-col gap-8 lg:pt-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">Year</p>
              <p className="mt-1 text-base font-medium text-[#171717]">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">Category</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {project.categories.filter((c) => c !== "All").map((cat) => (
                  <span key={cat} className="text-base font-medium text-[#171717]">{cat}</span>
                ))}
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#4A1942] transition-colors hover:text-[#2C0D28]"
              >
                Work with Ann
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional images */}
        {project.images && project.images.length > 0 && (
          <div className="mt-20">
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-zinc-400">More from this project</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.images.map((img, i) => (
                <div key={i} className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-100">
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Volunteer video */}
        {project.video && (
          <div className="mt-20">
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-zinc-400">Video</p>
            <video
              src={project.video}
              controls
              playsInline
              className="w-full rounded-sm"
            />
          </div>
        )}
      </div>
    </main>
  );
}
