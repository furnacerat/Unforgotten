"use client";

import { useState } from "react";

type GalleryItem = {
  label: string;
  src?: string;
  alt?: string;
};

type ProductGalleryProps = {
  items: GalleryItem[];
};

export function ProductGallery({ items }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="min-w-0 w-full lg:pr-10">
      <div className="group image-field grain relative flex min-h-[24rem] w-full items-end overflow-hidden border border-white/10 sm:min-h-[46rem] lg:min-h-[calc(100vh-8rem)]">
        {active.src ? (
          <img
            src={active.src}
            alt={active.alt ?? active.label}
            className="absolute inset-0 h-full w-full object-contain transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_34%,rgba(244,239,229,0.16),transparent_18rem),linear-gradient(135deg,#2b2d24,#11100e_62%,#080807)]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.08),rgba(8,8,7,0.68)),linear-gradient(90deg,rgba(8,8,7,0.22),transparent_48%,rgba(8,8,7,0.18))]" />
        <div className="relative z-10 w-full p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d8c69c]">
            {active.label}
          </p>
        </div>
      </div>

      <div className="scrollbar-hide mt-4 flex min-w-0 snap-x gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible xl:grid-cols-5">
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`focus-ring min-h-14 w-36 shrink-0 snap-start border px-4 py-3 text-left text-[0.64rem] uppercase tracking-[0.18em] transition-colors sm:w-auto sm:text-[0.68rem] ${
              activeIndex === index
                ? "border-[#a78a50] bg-[#a78a50] text-[#080807]"
                : "border-white/10 bg-white/[0.03] text-[#c6c0b5] hover:border-white/30"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}
