export function Contact() {
  return (
    <section className="px-5 pb-8 sm:px-8 lg:px-12" id="contact">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.18),rgba(245,158,11,0.12),rgba(255,255,255,0.04))] p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
              Контакты
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Обсудим задачу и выберем самый короткий путь к запуску
            </h2>
            <p className="mt-5 leading-7 text-zinc-200">
              Напишите, что нужно автоматизировать или продать через сайт:
              отвечу, какие блоки, сценарии и интеграции действительно нужны.
            </p>
          </div>

          <a
            href="https://t.me/your_username"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
