export function Contact() {
  return (
    <section className="px-5 pb-8 pt-10 sm:px-8 lg:px-10" id="contact">
      <div className="reveal mx-auto max-w-7xl rounded-lg bg-[#1C120A] p-6 text-[#FFF7EC] shadow-[0_38px_100px_rgba(28,18,10,0.24)] sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#FF9B3D]">
              Контакты
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-6xl">
              Есть идея для сайта, бота или приложения?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FFF7EC]/70">
              Напишите мне — обсудим задачу и подберём простой первый шаг.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="#"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#FF7A00] px-6 text-sm font-semibold text-[#1C120A] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF7EC] sm:w-auto"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
