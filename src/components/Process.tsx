const steps = [
  {
    title: "Разбор задачи",
    description:
      "Фиксируем цель, аудиторию, сценарии заявок и то, что должно измениться после запуска.",
  },
  {
    title: "Прототип",
    description:
      "Собираем структуру страницы, логику бота или основные экраны приложения без лишней сложности.",
  },
  {
    title: "Разработка",
    description:
      "Верстаю интерфейс, подключаю формы, сценарии, статусы, уведомления и базовые интеграции.",
  },
  {
    title: "Запуск",
    description:
      "Проверяем на телефоне и десктопе, публикуем проект и оставляем понятный план поддержки.",
  },
];

export function Process() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12" id="process">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Процесс
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Как проходит работа
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              className="relative rounded-lg border border-white/10 bg-white/[0.035] p-6"
              key={step.title}
            >
              <span className="text-sm font-semibold text-amber-200">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
