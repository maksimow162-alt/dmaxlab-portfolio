import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { baseDeliverables, services } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Что мы делаем"
            description="Сайты разного масштаба: от короткой визитки до полноценного сайта для салона или сервисной услуги."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <article className="glass-card group relative flex h-full flex-col gap-6 overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-azure-500/30 to-violet-500/30 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10">
                  <service.icon className="h-5 w-5" />
                </span>
                <div className="relative flex flex-col gap-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm leading-[1.5] text-graphite-300">{service.description}</p>
                </div>
                <div className="relative mt-auto flex flex-col gap-4 border-t border-white/[0.08] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-400">Что получаете</p>
                  <ul className="flex flex-col gap-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-[1.5] text-graphite-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="glass-card mt-6 p-8 sm:p-10">
            <h3 className="text-xl font-bold">Что входит в каждый проект</h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {baseDeliverables.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure-500/10 text-azure-400 ring-1 ring-azure-400/20">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="text-sm leading-[1.5] text-graphite-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
