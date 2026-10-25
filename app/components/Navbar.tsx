import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/0.9)] backdrop-blur-lg">
      <div className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center justify-between gap-x-4 px-4 sm:px-6 lg:px-8">
        {/* <a
          href="#about"
          className="text-base font-bold tracking-tight text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent-glow))]"
        >
          Jackson Kawawa
        </a> */}

        <nav
          aria-label="Main navigation"
          className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto pb-2 sm:mx-0 md:order-none md:w-auto md:overflow-visible md:pb-0"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-[hsl(var(--text-2))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--accent-glow))]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
