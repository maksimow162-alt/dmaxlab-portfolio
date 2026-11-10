import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { aboutPoints } from '@/data/siteContent';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="О студии"
            title="Разрабатываем технологии для развития бизнеса"
            description="DmaxLab — технологическая студия, объединяющая веб-разработку, искусственный интеллект и автоматизацию. Создаём цифровые продукты, разрабатываем интеллектуальные решения и соединяем инструменты в единую систему, чтобы помогать бизнесу работать эффективнее."
          />
        </Reveal>

        <div className="flex flex-col gap-4">
          {aboutPoints.map((point, index) => (
            <Reveal key={point.text} delay={index * 120}>
              <div className="glass-card group flex items-start gap-5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-azure-400/30 hover:shadow-[0_20px_50px_-25px_rgba(59,130,246,0.5)] sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-azure-500/10 text-azure-400 ring-1 ring-azure-400/20 transition-colors duration-500 group-hover:bg-azure-500/20">
                  <point.icon className="h-5 w-5" />
                </span>
                <p className="pt-2 text-base leading-[1.5] text-graphite-200">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
