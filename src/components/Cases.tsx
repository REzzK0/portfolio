const cases = [
  {
    title: "Сайт для салона",
    type: "Лендинг",
    description:
      "Страница с услугами, ценами, быстрым контактом и формой записи для администратора.",
    result: "Больше заявок из рекламы и понятный путь до записи.",
  },
  {
    title: "Бот для заявок",
    type: "Telegram",
    description:
      "Бот собирает имя, услугу, время и контакты, а затем отправляет заявку в рабочий чат.",
    result: "Менеджер получает уже структурированный запрос.",
  },
  {
    title: "Мини-CRM",
    type: "Веб-приложение",
    description:
      "Легкая панель со статусами заказов, заметками, фильтрами и историей обращений.",
    result: "Команда видит очередь задач без сложной CRM-системы.",
  },
];

export function Cases() {
  return (
    <section
      className="border-y border-white/10 bg-[#0b0f0d] px-5 py-20 sm:px-8 lg:px-12"
      id="cases"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
              Демо-кейсы
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Типовые задачи, которые можно быстро запустить
            </h2>
          </div>
          <p className="max-w-md leading-7 text-zinc-400">
            Каждый кейс можно адаптировать под нишу: услуги, обучение, ремонт,
            доставка, локальный сервис или онлайн-консультации.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70"
              key={item.title}
            >
              <div className="flex h-44 flex-col justify-between border-b border-white/10 bg-[linear-gradient(135deg,rgba(45,212,191,0.16),rgba(245,158,11,0.12)_45%,rgba(255,255,255,0.04))] p-5">
                <span className="w-fit rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-zinc-100">
                  {item.type}
                </span>
                <div className="space-y-2">
                  <div className="h-2 w-2/3 rounded-full bg-white/70" />
                  <div className="h-2 w-1/2 rounded-full bg-white/35" />
                  <div className="h-10 rounded-md border border-white/12 bg-black/20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{item.description}</p>
                <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-teal-100">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
