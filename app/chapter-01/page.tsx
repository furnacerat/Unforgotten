import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/lib/content";

export default function ChapterOnePage() {
  return (
    <PageShell
      eyebrow="Chapter 01"
      title="The 99"
      intro="You were worth searching for."
    >
      <section className="mx-auto max-w-7xl pb-24">
        <ImagePlaceholder
          label="Film Placeholder"
          src="/images/chapter-01-shepherd.png"
          alt="A shepherd walking through mist beside a stone pen of sheep."
          className="min-h-[70vh]"
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 pb-24 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Story Summary" title="The search did not stop." />
        <div className="space-y-7 text-base leading-8 text-[#c6c0b5] sm:text-lg">
          <p>
            Chapter 01 follows the ache of being the one who wandered and the
            mercy of a shepherd who noticed the empty place. It is a story for
            people who have felt difficult to find, difficult to love, or too
            far away to be called home.
          </p>
          <p>
            The collection carries that reminder in simple, weighty pieces:
            garments made to feel like a quiet hand on the shoulder.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <SectionHeader eyebrow="Collection Pieces" title="The first artifacts." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 pb-24 lg:grid-cols-2">
        <ImagePlaceholder label="Field Journal Preview" className="min-h-[28rem]" />
        <div className="border border-white/10 bg-[#11100e] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Outreach Mission
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5]">
            A place reserved for impact.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#c6c0b5]">
            This chapter will connect to a real outreach effort tied to the
            story being told. The details will be named when the first launch is
            ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl pb-28 text-center">
        <p className="brand-serif text-4xl leading-tight text-[#f4efe5] sm:text-6xl">
          Who in your life needs to know they haven't been forgotten?
        </p>
      </section>
    </PageShell>
  );
}
