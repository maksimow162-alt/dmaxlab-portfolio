import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { portfolioProjects } from '@/data/siteContent';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Портфолио"
              title="Наши проекты и разработки"
              description="Здесь представлены демонстрационные цифровые продукты DmaxLab. Показываем наши возможности в разработке, дизайне и создании удобных цифровых решений."
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 150}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-sm text-graphite-400">
            Все проекты на этой странице — демонстрационные работы DmaxLab, созданные для демонстрации наших возможностей.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
