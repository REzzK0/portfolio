const services = [
  {
    title: "Лендинги",
    description: "Страницы для рекламы, услуг, записи и заявок.",
    index: "01",
  },
  {
    title: "Telegram-боты",
    description:
      "Боты для заявок, уведомлений, FAQ, записи и простых сценариев.",
    index: "02",
  },
  {
    title: "Мини-приложения",
    description:
      "Небольшие веб-сервисы, панели заявок, каталоги и CRM-подобные решения.",
    index: "03",
  },
];

export function Services() {
  return (
    <section
      className="relative isolate px-5 py-20 sm:px-8 lg:px-10"
      id="services"
    >
      <div className="decor-orbit scroll-drift left-[6%] top-16 hidden lg:block" />
      <div className="decor-pill scroll-drift-reverse bottom-24 right-[8%] hidden lg:block">
        landing / bot / app
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="reveal-left grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="text-sm font-semibold uppercase text-[#FF7A00]">
            Что я делаю
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-[#1C120A] sm:text-6xl">
            Аккуратные цифровые инструменты под реальный рабочий процесс
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              className="reveal-scale group relative overflow-hidden rounded-lg border border-[#1C120A]/10 bg-[#FFF7EC]/92 p-6 shadow-[0_22px_70px_rgba(28,18,10,0.07)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#FF7A00]/45 hover:shadow-[0_30px_90px_rgba(28,18,10,0.12)]"
              style={{ animationDelay: `${index * 90}ms` }}
              key={service.title}
            >
              <span className="absolute right-5 top-5 h-16 w-16 rounded-full border border-[#FF7A00]/22 bg-[#FF7A00]/8 transition duration-500 group-hover:scale-110" />
              <span className="absolute -right-8 bottom-8 h-24 w-24 rounded-full border border-[#1C120A]/8" />
              <span className="text-sm font-semibold text-[#FF7A00]">
                {service.index}
              </span>
              <h3 className="mt-16 text-2xl font-semibold text-[#1C120A]">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-[#1C120A]/65">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
