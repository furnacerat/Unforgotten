import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ProductCardProps = {
  name: string;
  symbol?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function ProductCard({
  name,
  symbol,
  description,
  imageSrc,
  imageAlt,
  href,
}: ProductCardProps) {
  const content = (
    <>
      <ImagePlaceholder
        label={name}
        src={imageSrc}
        alt={imageAlt}
        imageFit={imageSrc ? "contain" : "cover"}
        className="min-h-[16rem] bg-[#f4efe5] sm:min-h-[18rem]"
      />
      <div className="p-5 sm:p-6">
        {symbol ? (
          <p className="mb-4 text-[0.66rem] uppercase tracking-[0.24em] text-[#a78a50]">
            {symbol}
          </p>
        ) : null}
        <p className="brand-serif text-2xl leading-tight text-[#f4efe5]">
          {name}
        </p>
        <p className="mt-4 min-h-0 text-sm leading-7 text-[#b9b1a5] sm:min-h-20">
          {description}
        </p>
        <p className="mt-6 inline-flex min-h-11 items-center border border-[#a78a50]/70 px-4 text-[0.68rem] uppercase tracking-[0.22em] text-[#d8c69c] transition-colors group-hover:border-[#a78a50] group-hover:bg-[#a78a50] group-hover:text-[#080807]">
          {href ? "View Story" : "Coming Soon"}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-ring group fade-in block overflow-hidden border border-white/10 bg-[#11100e] transition-colors hover:border-[#a78a50]/60"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="fade-in border border-white/10 bg-[#11100e]">
      {content}
    </article>
  );
}
