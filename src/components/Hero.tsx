import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-6 sm:px-8 lg:px-12">
      <Image
        src="/portfolio-workflow.png"
        alt="Темный UI-мокап лендинга, Telegram-бота и CRM"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,9,8,0.96)_0%,rgba(7,9,8,0.84)_45%,rgba(7,9,8,0.46)_100%),linear-gradient(180deg,rgba(7,9,8,0.2)_0%,#070908_100%)]" />
      <div className="mx-auto flex min-h-[78svh] w-full max-w-7xl min-w-0 flex-col justify-center py-8">
        <div className="hero-copy w-full min-w-0">
          <p className="mb-6 inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-teal-100">
            Разработка под задачи малого бизнеса
          </p>
          <h1 className="max-w-full break-words text-3xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            <span className="block">Сайты, Telegram-боты</span>
            <span className="block">и мини-приложения для</span>
            <span className="block">заявок, записи и автоматизации</span>
          </h1>
          <p className="mt-6 max-w-2xl break-words text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
            Помогаю превратить ручные заявки, переписки и таблицы в понятные
            цифровые инструменты: от первого экрана лендинга до CRM под ваш
            рабочий процесс.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://t.me/your_username"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-teal-300 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
            >
              Написать в Telegram
            </a>
            <a
              href="#cases"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/14 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
            >
              Посмотреть демо
            </a>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3 sm:max-w-xl">
            {["Быстрый запуск", "Адаптивная верстка", "Поддержка после релиза"].map(
              (item) => (
                <div
                  className="min-w-0 break-words rounded-lg border border-white/10 bg-white/[0.035] p-3"
                  key={item}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
