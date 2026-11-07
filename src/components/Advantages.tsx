import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { advantages } from '@/data/siteContent';

export default function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Преимущества"
            title="Почему с нами удобно работать"
            description="Три принципа, на которых строятся все наши сайты."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage.title} delay={index * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-graphite-850/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-500/20 to-violet-500/20 text-white ring-1 ring-white/10">
                  <advantage.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 text-xl font-bold">{advantage.title}</h3>
                <p className="text-sm leading-[1.5] text-graphite-300">{advantage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
