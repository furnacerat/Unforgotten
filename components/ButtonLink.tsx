import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-[#a78a50] bg-[#a78a50] text-[#080807] hover:bg-transparent hover:text-[#f4efe5]"
      : "border-white/30 text-[#f4efe5] hover:border-[#f4efe5] hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center border px-6 text-center text-xs uppercase tracking-[0.22em] transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
