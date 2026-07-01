const tickerItems = [
  "лендинги",
  "Telegram-боты",
  "заявки",
  "запись",
  "автоматизация",
  "мини-приложения",
];

export function Ticker() {
  const content = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="overflow-hidden bg-[#FF8A1F] py-4 text-[#1C120A]">
      <div className="ticker-track flex w-max items-center gap-7 whitespace-nowrap text-2xl font-semibold sm:text-4xl">
        {content.map((item, index) => (
          <span className="flex items-center gap-7" key={`${item}-${index}`}>
            {item}
            <span className="h-2 w-2 rounded-full bg-[#1C120A]" />
          </span>
        ))}
      </div>
    </section>
  );
}
