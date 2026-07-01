const formats = ["Лендинг", "Бот", "Мини-app"];
const tags = ["заявки", "запись", "уведомления", "простая CRM"];

export function Hero() {
  return (
    <section
      className="relative isolate px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10"
      id="top"
    >
      <div className="absolute left-1/2 top-8 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF7A00]/14 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <p className="reveal mb-7 inline-flex rounded-full bg-[#FFF7EC] px-4 py-2 text-sm font-semibold text-[#7A4B22] shadow-[0_16px_50px_rgba(28,18,10,0.06)]">
          Портфолио разработчика для малого бизнеса
        </p>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div className="reveal min-w-0">
            <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.96] text-[#1C120A]">
              Сайты, боты и приложения для малого бизнеса
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1C120A]/72 sm:text-xl">
              Помогаю запускать лендинги, Telegram-ботов и простые
              веб-приложения для заявок, записи и автоматизации.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
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

          <div className="soft-float rounded-lg bg-[#1C120A] p-5 text-[#FFF7EC] shadow-[0_36px_90px_rgba(28,18,10,0.22)] sm:p-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-[#FFF7EC]/58">Формат работы</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  От идеи до первой версии
                </h2>
              </div>
              <span className="h-4 w-4 shrink-0 rounded-full bg-[#FF7A00]" />
            </div>

            <div className="mt-10 grid gap-3">
              {formats.map((item) => (
                <div
                  className="rounded-lg border border-[#FFF7EC]/12 bg-[#FFF7EC]/7 p-4"
                  key={item}
                >
                  <p className="text-sm text-[#FFF7EC]/58">Запуск</p>
                  <p className="mt-2 text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#FFF7EC]/72">
              {tags.map((tag) => (
                <span
                  className="rounded-full bg-[#FFF7EC]/10 px-3 py-1"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
