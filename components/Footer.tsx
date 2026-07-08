import Link from "next/link";
import { navItems } from "@/lib/content";
import { EmailSignup } from "./EmailSignup";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080807] px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-7 text-sm uppercase tracking-[0.24em] text-[#a7a196]">
            Every Story Matters.
          </p>
          <p className="brand-serif mt-3 text-2xl text-[#f4efe5]">
            You Were Never Forgotten.
          </p>
        </div>
        <EmailSignup compact />
        <div className="grid gap-6 text-sm text-[#c6c0b5] sm:grid-cols-2 lg:grid-cols-1">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <Link className="focus-ring hover:text-[#f4efe5]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 text-[#a7a196]">
            <p>Instagram</p>
            <p>TikTok</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
