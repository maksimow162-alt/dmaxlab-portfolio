import {
  ArrowRight,
  Code2,
  Bot,
  Workflow,
  Sparkles,
  Send,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const directions = [
  { icon: Code2, title: 'Веб-разработка' },
  { icon: Bot, title: 'AI и Telegram-боты' },
  { icon: Workflow, title: 'Автоматизация' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-[28rem] w-[28rem] rounded-full bg-azure-600/30 blur-[120px] animate-drift" />
        <div className="absolute -right-24 top-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-600/25 blur-[120px] animate-drift [animation-delay:-6s]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-start gap-7">

          <Reveal delay={120}>
            <div className="flex items-center gap-2 rounded-full border border-azure-500/25 bg-azure-500/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-azure-400" />
              <span className="text-xs font-semibold tracking-wide text-azure-300 sm:text-sm">
                ЦИФРОВАЯ РАЗРАБОТКА И ТЕХНОЛОГИИ
              </span>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Создаём цифровые продукты.
              {' '}
              <span className="text-gradient">
                Автоматизируем бизнес.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="max-w-xl text-base leading-relaxed text-graphite-300 sm:text-lg">
              Разрабатываем сайты, веб-приложения, AI-решения и системы
              автоматизации. Превращаем идеи в работающие цифровые продукты,
              которые помогают бизнесу развиваться.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="flex flex-wrap gap-2">
              {directions.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-graphite-200"
                >
                  <Icon className="h-4 w-4 text-azure-400" />
                  {title}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="btn-primary group">
                Наши проекты
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost">
                Обсудить проект
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a
              href="https://t.me/DmaxLab_Official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть официальный Telegram-канал DmaxLab"
              className="group flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:-translate-y-1


hover:border-azure-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-500/15 text-azure-400 transition-colors group-hover:bg-azure-500/25">
                <Send className="h-5 w-5" />
              </span>

              <span className="flex flex-1 flex-col gap-1">
                <span className="text-sm font-semibold text-white">
                  DmaxLab | Official
                </span>
                <span className="text-xs text-graphite-400">
                  Проекты, разработки и новости студии
                </span>
              </span>

              <ArrowRight className="h-5 w-5 shrink-0 text-graphite-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-azure-400" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={300} className="relative hidden h-[26rem] lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-10 rounded-3xl border border-white/10 bg-graphite-850/80 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
              </div>
              <span className="text-xs text-graphite-400">
                DmaxLab / Digital
              </span>
            </div>

            <div className="h-3 w-2/5 rounded-full bg-gradient-to-r from-azure-500 to-violet-500" />

            <div className="mt-5 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-600/30 via-graphite-700 to-violet-600/30">
              <Code2 className="h-16 w-16 text-white/70" strokeWidth={1.2} />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {directions.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.04]"
                >
                  <Icon className="h-5 w-5 text-azure-400" />
                  <span className="text-center text-[10px] text-graphite-300">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-2 left-0 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-graphite-800/90 px-4 py-3 shadow-2xl backdrop-blur-xl [animation-delay:-3s]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-sm font-semibold text-white">
              От идеи до готового продукта
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}