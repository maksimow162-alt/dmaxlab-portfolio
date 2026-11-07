import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { processSteps } from '@/data/siteContent';

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Этапы работы"
            title="Как мы работаем"
            description="Прозрачный путь от первого разговора до публикации сайта."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.6rem] top-0 w-px bg-gradient-to-b from-azure-500/60 via-violet-500/40 to-transparent lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.6rem] lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 110} className="relative">
              <div className="group flex gap-5 lg:flex-col lg:gap-6">
                <span className="relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-graphite-850 text-azure-400 shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:border-azure-400/40 group-hover:text-white group-hover:shadow-[0_12px_30px_-8px_rgba(59,130,246,0.6)]">
                  <step.icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <span className="text-xs font-bold tracking-[0.2em] text-graphite-500">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-[1.5] text-graphite-300">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
