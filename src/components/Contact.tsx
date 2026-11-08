import { Send } from 'lucide-react';
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
                Расскажите о вашем бизнесе, и мы вместе определим,
                каким должен быть сайт. Напишите нам — обсудим вашу задачу
                и возможные решения.
              </p>

              <a
                href="https://t.me/DmaxLab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать DmaxLab в Telegram"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-azure-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-azure-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-azure-400 hover:shadow-azure-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-400 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-850"
              >
                <Send className="h-5 w-5" />
                Написать в Telegram
              </a>

              <span className="text-sm text-graphite-400">
                @DmaxLab
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}