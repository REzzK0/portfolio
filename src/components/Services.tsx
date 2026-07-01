const services = [
  {
    title: "Лендинги",
    description:
      "Одностраничные сайты для услуг, записи, заявок и теста новых направлений.",
    details: ["Структура оффера", "Адаптивная верстка", "Формы и аналитика"],
  },
  {
    title: "Telegram-боты",
    description:
      "Боты, которые принимают заявки, задают вопросы, записывают клиентов и уведомляют команду.",
    details: ["Сценарии диалогов", "Заявки в чат", "Интеграции с таблицами"],
  },
  {
    title: "Мини-приложения",
    description:
      "Небольшие веб-инструменты: кабинеты, калькуляторы, мини-CRM и внутренние панели.",
    details: ["Логика под процесс", "Удобные таблицы", "Роли и статусы"],
  },
];

export function Services() {
  return (
    <section className="px-5 pb-16 pt-12 sm:px-8 sm:py-20 lg:px-12" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Услуги
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Собираю понятные инструменты вместо хаоса в переписках
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-teal-200/40 hover:bg-white/[0.055]"
              key={service.title}
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-lg font-semibold text-teal-200">
                {service.title.slice(0, 1)}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                {service.details.map((detail) => (
                  <li className="flex gap-2" key={detail}>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
