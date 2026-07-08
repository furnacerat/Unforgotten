import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ProductCardProps = {
  name: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function ProductCard({
  name,
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
        className="min-h-[18rem] bg-[#f4efe5]"
      />
      <div className="p-5 sm:p-6">
        <p className="brand-serif text-2xl text-[#f4efe5]">{name}</p>
        <p className="mt-4 min-h-0 text-sm leading-7 text-[#b9b1a5] sm:min-h-20">
          {description}
        </p>
        <p className="mt-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-[#a78a50]">
          {href ? "View Story" : "Coming Soon"}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-ring fade-in block border border-white/10 bg-[#11100e] transition-colors hover:border-[#a78a50]/60"
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
