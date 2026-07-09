import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content";

const chapterMotifs = ["Pursuit", "Redemption", "Being Found"];

export default function ShopPreviewPage() {
  return (
    <main className="px-5 pt-36 sm:px-8 lg:pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 pb-20 pt-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:pb-28">
        <div className="fade-in max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
            Chapter 01 - The 99
          </p>
          <h1 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
            Artifacts from the story of pursuit.
          </h1>
          <div className="mt-9 max-w-2xl space-y-5 text-base leading-8 text-[#c6c0b5] sm:text-lg">
            <p>
              Every chapter leaves behind artifacts - pieces shaped by the
              story that inspired them.
            </p>
            <p>
              Chapter 01 begins with pursuit, redemption, and being found.
            </p>
            <p>These are the first garments born from that story.</p>
          </div>
        </div>

        <div className="fade-in-slow">
          <ImagePlaceholder
            label="Chapter 01 Collection"
            src="/images/chapter-01-shepherd.png"
            alt="A cinematic shepherd walking through mist with sheep, representing Chapter 01 The 99."
            className="min-h-[24rem] lg:min-h-[34rem]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-y border-white/10 py-8">
        <div className="grid gap-3 text-[0.66rem] uppercase tracking-[0.24em] text-[#d8c69c] sm:grid-cols-3">
          {chapterMotifs.map((motif) => (
            <div
              className="flex min-h-14 items-center justify-between border border-white/10 px-4"
              key={motif}
            >
              <span>{motif}</span>
              <span className="h-px w-10 bg-[#a78a50]" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-20 lg:py-28">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
              The Collection
            </p>
            <h2 className="brand-serif mt-4 text-4xl font-medium leading-tight text-[#f4efe5] sm:text-5xl">
              Story first. Clothing second.
            </h2>
          </div>
          <Link
            href="/chapter-01"
            className="focus-ring inline-flex min-h-12 w-fit items-center border border-white/15 px-5 text-[0.68rem] uppercase tracking-[0.24em] text-[#d8c69c] transition-colors hover:border-[#a78a50]"
          >
            Enter Chapter 01
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-y border-white/10 py-16 text-center lg:py-24">
        <p className="brand-serif text-4xl leading-tight text-[#f4efe5] sm:text-6xl">
          Every artifact carries a piece of the story.
        </p>
        <p className="brand-serif mt-4 text-3xl leading-tight text-[#d8c69c] sm:text-5xl">
          Every story carries a piece of you.
        </p>
        <p className="mt-9 text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          This is only the beginning.
        </p>
      </section>
    </main>
  );
}
