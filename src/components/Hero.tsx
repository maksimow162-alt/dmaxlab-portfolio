import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28">
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
        <div className="flex flex-col items-start gap-8">
          <Reveal>
            <Logo className="origin-left scale-110" />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Создаём сайты, которые <span className="text-gradient">представляют ваш бизнес</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="max-w-xl text-base leading-[1.5] text-graphite-300 sm:text-lg">
              DmaxLab - digital-студия, которая разрабатывает современные сайты для малого бизнеса: от визиток и
              лендингов до сайтов для салонов и сервисных услуг.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="btn-primary group">
                Посмотреть работы
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost">
                Обсудить проект
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="relative hidden h-[26rem] lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-10 rounded-3xl border border-white/10 bg-graphite-850/80 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float"
          >
            <div className="mb-5 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-graphite-600" />
            </div>
            <div className="h-3 w-2/5 rounded-full bg-gradient-to-r from-azure-500 to-violet-500" />
            <div className="mt-5 h-36 rounded-2xl bg-gradient-to-br from-azure-600/40 via-graphite-700 to-violet-600/30" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-xl bg-white/[0.06]" />
              <div className="h-16 rounded-xl bg-white/[0.06]" />
              <div className="h-16 rounded-xl bg-white/[0.06]" />
            </div>
          </div>
          <div className="absolute -bottom-2 left-0 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-graphite-800/90 px-4 py-3 shadow-2xl backdrop-blur-xl [animation-delay:-3s]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-sm font-semibold text-white">Адаптивно для любого экрана</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
