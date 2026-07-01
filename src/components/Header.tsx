const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1C120A]/5 bg-[#F3E8D8]/82 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#top"
          className="text-base font-semibold text-[#1C120A] transition hover:text-[#FF7A00]"
        >
          Timur Studio
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#1C120A]/72 md:flex"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              className="transition hover:text-[#1C120A]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/WEXxxx0t"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-[#1C120A] px-4 text-sm font-semibold text-[#FFF7EC] transition hover:-translate-y-0.5 hover:bg-[#FF7A00]"
        >
          Обсудить
        </a>
      </div>
    </header>
  );
}
