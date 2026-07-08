import { ImagePlaceholder } from "./ImagePlaceholder";

type ProductCardProps = {
  name: string;
  description: string;
};

export function ProductCard({ name, description }: ProductCardProps) {
  return (
    <article className="fade-in border border-white/10 bg-[#11100e]">
      <ImagePlaceholder label={name} className="min-h-[18rem]" />
      <div className="p-6">
        <p className="brand-serif text-2xl text-[#f4efe5]">{name}</p>
        <p className="mt-4 min-h-20 text-sm leading-7 text-[#b9b1a5]">
          {description}
        </p>
        <p className="mt-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-[#a78a50]">
          Coming Soon
        </p>
      </div>
    </article>
  );
}
