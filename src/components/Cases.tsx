const cases = [
  {
    title: "Лендинг для салона",
    description:
      "Тёплая страница услуг с записью, ценами и быстрым контактом.",
    features: ["первый экран", "форма записи", "адаптив под рекламу"],
  },
  {
    title: "Бот для заявок",
    description: "Telegram-сценарий, который собирает запрос и отправляет его в чат.",
    features: ["вопросы клиенту", "уведомления", "структура заявки"],
  },
  {
    title: "Мини-CRM для мастера",
    description:
      "Небольшая панель, где видно заказы, статусы и ближайшие задачи.",
    features: ["статусы", "заметки", "простая таблица"],
  },
];

export function Cases() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="cases">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-[#FF7A00]">
              Кейсы
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-[#1C120A] sm:text-6xl">
              Демо-задачи, похожие на настоящие проекты
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#1C120A]/64">
            Не показываю чужие данные. Эти карточки демонстрируют тип логики,
            интерфейса и результата, который можно собрать под вашу нишу.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              className="reveal group flex min-h-[420px] flex-col rounded-lg border border-[#1C120A]/10 bg-[#F8EBD8] p-6 transition duration-500 hover:-translate-y-2 hover:bg-[#FFF7EC] hover:shadow-[0_30px_90px_rgba(28,18,10,0.12)]"
              key={item.title}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#FF7A00]/12 px-3 py-1 text-xs font-semibold text-[#9B4A00]">
                  Демо-кейс
                </span>
                <span className="h-3 w-3 rounded-full bg-[#FF7A00]" />
              </div>

              <div className="mt-14">
                <h3 className="text-3xl font-semibold text-[#1C120A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#1C120A]/66">
                  {item.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-[#1C120A]/70">
                {item.features.map((feature) => (
                  <li
                    className="border-t border-[#1C120A]/10 pt-3"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                className="mt-auto inline-flex pt-8 text-sm font-semibold text-[#1C120A] transition group-hover:text-[#FF7A00]"
                href="#contact"
              >
                Подробнее
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
