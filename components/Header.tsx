import Link from "next/link";
import { navItems } from "@/lib/content";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080807]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-7 text-[0.68rem] uppercase tracking-[0.22em] text-[#d4cfc5] lg:flex">
          {navItems.map((item) => (
            <Link
              className="focus-ring transition-colors hover:text-[#f4efe5]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="focus-ring border border-[#a78a50]/60 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#f4efe5] transition-colors hover:bg-[#a78a50] hover:text-[#080807]"
        >
          Signup
        </Link>
      </div>
      <nav
        className="scrollbar-hide flex gap-2 overflow-x-auto border-t border-white/10 px-5 pb-3 pt-2 text-[0.64rem] uppercase tracking-[0.2em] text-[#d4cfc5] lg:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            className="focus-ring shrink-0 border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-[#a78a50]/60 hover:text-[#f4efe5]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
