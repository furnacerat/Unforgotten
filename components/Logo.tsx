import Link from "next/link";

type LogoProps = {
  centered?: boolean;
  compact?: boolean;
};

export function Logo({ centered = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`focus-ring inline-flex flex-col ${
        centered ? "items-center text-center" : "items-start"
      }`}
      aria-label="UNFORGOTTEN home"
    >
      <span
        className={`tracking-[0.34em] text-[#f4efe5] ${
          compact ? "text-sm" : "text-lg sm:text-xl"
        }`}
      >
        UNFORGOTTEN
      </span>
      <span className="mt-2 h-px w-full bg-[#a78a50]" />
    </Link>
  );
}
