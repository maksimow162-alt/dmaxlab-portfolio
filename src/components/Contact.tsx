import { Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-850 px-6 py-16 text-center shadow-[0_40px_100px_-40px_rgba(59,130,246,0.5)] sm:px-16 sm:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-azure-600/35 blur-[100px] animate-drift"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-600/30 blur-[100px] animate-drift [animation-delay:-8s]"
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure-400">
                <span className="h-px w-6 bg-azure-400" />
                Контакты
                <span className="h-px w-6 bg-azure-400" />
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                Обсудим ваш <span className="text-gradient">проект</span>
              </h2>
              <p className="text-base leading-[1.5] text-graphite-300 sm:text-lg">
                Расскажите о вашем бизнесе, и мы вместе определим, каким должен быть сайт. Способы связи с студией
                будут добавлены позже.
              </p>

              <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-graphite-200">
                <Clock className="h-4 w-4 text-azure-400" />
                <span>Контакты будут добавлены позже</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
