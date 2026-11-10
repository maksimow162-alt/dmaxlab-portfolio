import Logo from '@/components/Logo';
import { navItems } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 sm:px-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo />
          <p className="text-sm text-graphite-400">
              Создаём цифровые продукты. Автоматизируем бизнес.
          </p>
        </div>

        <nav aria-label="Футер">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-graphite-300 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-graphite-500">
          © {new Date().getFullYear()} DmaxLab. Демонстрационные проекты.
        </p>
      </div>
    </footer>
  );
}
