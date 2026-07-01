export function Hero() {
  return (
    <section
      className="relative isolate px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24 lg:px-10"
      id="top"
    >
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF7A00]/14 blur-3xl" />
      <div className="scroll-drift pointer-events-none absolute left-[9%] top-36 hidden h-24 w-24 rounded-full border border-[#FF7A00]/24 lg:block" />
      <div className="scroll-drift-reverse pointer-events-none absolute right-[11%] top-28 hidden h-3 w-3 rounded-full bg-[#FF7A00] shadow-[0_0_0_18px_rgba(255,122,0,0.08)] lg:block" />

      <div className="mx-auto max-w-7xl">
        <p className="reveal mb-7 inline-flex rounded-full bg-[#FFF7EC]/86 px-4 py-2 text-sm font-semibold text-[#7A4B22] shadow-[0_16px_50px_rgba(28,18,10,0.06)] backdrop-blur-sm">
          Портфолио разработчика для малого бизнеса
        </p>

        <div className="reveal mx-auto max-w-6xl">
          <h1 className="mx-auto text-[clamp(3.3rem,8.7vw,8.4rem)] font-semibold leading-[0.9] text-[#1C120A]">
            Сайты, боты и приложения для малого бизнеса
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#1C120A]/72 sm:text-xl">
            Помогаю запускать лендинги, Telegram-ботов и простые
            веб-приложения для заявок, записи и автоматизации.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://t.me/WEXxxx0t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1C120A] px-6 text-sm font-semibold text-[#FFF7EC] transition duration-300 hover:-translate-y-1 hover:bg-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#F3E8D8]"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#1C120A]/16 bg-[#F8EBD8]/70 px-6 text-sm font-semibold text-[#1C120A] transition duration-300 hover:-translate-y-1 hover:border-[#1C120A]/28 hover:bg-[#FFF7EC]"
            >
              Смотреть кейсы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
