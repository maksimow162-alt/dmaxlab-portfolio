import { useState, type FormEvent } from 'react';
import { Send, Mail, User, MessageSquare, Loader2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setStatus('sending');

  const form = event.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/DmaxLab@yandex.ru',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok || result.success !== 'true') {
      throw new Error(result.message || 'Ошибка отправки');
    }

    setStatus('success');
    form.reset();
  } catch (error) {
    console.error('Ошибка FormSubmit:', error);
    setStatus('error');
  }
}

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-850 px-6 py-16 shadow-[0_40px_100px_-40px_rgba(59,130,246,0.5)] sm:px-16 sm:py-24">
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

              <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl">
                Обсудим ваш <span className="text-gradient">проект</span>
              </h2>

              <p className="text-center text-base leading-[1.5] text-graphite-300 sm:text-lg">
                Расскажите о своей задаче или идее. Вместе найдём подходящее
                цифровое решение для вашего бизнеса.
              </p>

              <a
                href="https://t.me/DmaxLab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать DmaxLab в Telegram"
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-azure-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-azure-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-azure-400"
              >
                <Send className="h-5 w-5" />
                Написать в Telegram
              </a>

              <span className="text-sm text-graphite-400">
                @DmaxLab
              </span>

              <div className="my-5 flex w-full items-center gap-4">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-sm text-graphite-400">
                  или оставьте заявку
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Новая заявка с сайта DmaxLab"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <label className="flex flex-col gap-2 text-sm font-medium text-graphite-200">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4 text-azure-400" />
                    Ваше имя
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    placeholder="Как к вам обращаться?"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base text-white outline-none transition focus:border-azure-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-graphite-200">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-azure-400" />
                    Электронная почта
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    placeholder="example@mail.ru"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base text-white outline-none transition focus:border-azure-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-graphite-200">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-azure-400" />
                    Расскажите о проекте
                  </span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    placeholder="Что вы хотите создать или автоматизировать? Опишите свою идею..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base text-white outline-none transition focus:border-azure-400"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-azure-500 px-8 py-4 font-semibold text-white shadow-lg shadow-azure-500/20 transition hover:bg-azure-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Отправить заявку
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p role="status" className="text-center text-sm text-green-400">
                    Заявка отправлена. Спасибо за обращение!
                  </p>
                )}

                {status === 'error' && (
                  <p role="alert" className="text-center text-sm text-red-400">
                    Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.
                  </p>
                )}
              </form>

              <p className="text-center text-xs leading-relaxed text-graphite-400">
                Тестовая форма. Не отправляйте реальные персональные данные
                до завершения настройки и проверки политики конфиденциальности.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}