const steps = [
  {
    title: "Обсуждаем задачу",
    description:
      "Понимаем цель, аудиторию, точки контакта и первый полезный результат.",
  },
  {
    title: "Собираю структуру",
    description:
      "Раскладываю сценарий на экраны, блоки, статусы и простые действия.",
  },
  {
    title: "Делаю первую версию",
    description:
      "Собираю интерфейс, подключаю формы, уведомления и нужную логику.",
  },
  {
    title: "Запускаем и улучшаем",
    description:
      "Проверяем на устройствах, публикуем и улучшаем после первых заявок.",
  },
];

export function Process() {
  return (
    <section
      className="relative isolate px-5 py-20 sm:px-8 lg:px-10"
      id="process"
    >
      <div className="decor-pill scroll-drift left-[7%] top-10 hidden lg:block">
        4 шага
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="reveal-left max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#FF7A00]">
            Как проходит работа
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] text-[#1C120A] sm:text-6xl">
            Спокойный процесс без лишней бюрократии
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[#1C120A]/12 border-y border-[#1C120A]/12">
          {steps.map((step, index) => (
            <article
              className="reveal-right group relative grid gap-5 py-8 md:grid-cols-[0.35fr_0.75fr_1fr] md:items-start"
              style={{ animationDelay: `${index * 80}ms` }}
              key={step.title}
            >
              <span className="absolute left-0 top-0 hidden h-px w-0 bg-[#FF7A00] transition-all duration-700 group-hover:w-full md:block" />
              <span className="text-6xl font-semibold leading-none text-[#FF7A00] sm:text-7xl">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-semibold text-[#1C120A]">
                {step.title}
              </h3>
              <p className="max-w-xl leading-7 text-[#1C120A]/64">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
