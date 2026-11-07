import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '@/data/siteContent';

interface ProjectCardProps {
  project: PortfolioProject;
}

const accentClasses = {
  blue: 'text-azure-300 bg-azure-500/10 ring-azure-400/25',
  violet: 'text-violet-300 bg-violet-500/10 ring-violet-400/25',
} as const;

export default function ProjectCard({ project }: ProjectCardProps) {
  const { preview } = project;

  return (
    <article className="glass-card group flex h-full flex-col gap-6 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_30px_70px_-30px_rgba(59,130,246,0.45)] sm:p-5">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-950 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-graphite-600" />
          <span className="h-2 w-2 rounded-full bg-graphite-600" />
          <span className="h-2 w-2 rounded-full bg-graphite-600" />
          <span className="ml-3 truncate rounded-md bg-white/[0.04] px-3 py-1 text-[11px] text-graphite-400">
            {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-900/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-1 pb-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${accentClasses[project.accent]}`}>
            {project.niche}
          </span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-graphite-300 ring-1 ring-white/10">
            Демонстрационная работа
          </span>
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight">{project.name}</h3>
        <p className="text-sm leading-[1.5] text-graphite-300">{project.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="text-xs text-graphite-400">
                #{tag}
              </li>
            ))}
          </ul>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-azure-300"
          >
            Открыть демо
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
