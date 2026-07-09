import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { products } from "@/lib/content";
import type { ProductDetail } from "@/lib/productDetails";

const features = [
  {
    title: "Premium Quality",
    copy: "Built from heavyweight materials designed to age beautifully.",
  },
  {
    title: "Story Driven",
    copy: "Every piece represents one chapter in the UNFORGOTTEN story.",
  },
  {
    title: "Field Journal Included",
    copy: "Every order includes a physical UNFORGOTTEN Field Journal.",
  },
  {
    title: "Purpose Beyond You",
    copy: "Every chapter supports real outreach efforts.",
  },
];

type EditorialProductPageProps = {
  product: ProductDetail;
};

const productTabs = [
  ["Story", "story"],
  ["Details", "details"],
  ["Experience", "experience"],
  ["Impact", "impact"],
];

export function EditorialProductPage({ product }: EditorialProductPageProps) {
  const fallbackGalleryLabels = [
    "Front / Back Mockup",
    "Back Artwork",
    "Lifestyle Photo",
    "Detail Embroidery",
    "Collar Detail",
    "Sleeve Tag",
    "Inside Print",
    "Packaging",
    "Journal",
    "Certificate",
  ];

  const galleryItems = (product.galleryLabels ?? fallbackGalleryLabels).map(
    (label, index) => ({
      label,
      src: index === 0 ? product.imageSrc : undefined,
      alt: index === 0 ? product.imageAlt : undefined,
    }),
  );

  return (
    <main className="px-5 pt-36 sm:px-8 lg:pt-28">
      <nav
        className="scrollbar-hide sticky top-[6.9rem] z-30 -mx-5 mb-8 flex gap-2 overflow-x-auto border-y border-white/10 bg-[#080807]/90 px-5 py-3 text-[0.64rem] uppercase tracking-[0.2em] text-[#d4cfc5] backdrop-blur-xl lg:hidden"
        aria-label={`${product.name} sections`}
      >
        {productTabs.map(([label, href]) => (
          <a
            href={`#${href}`}
            key={href}
            className="focus-ring shrink-0 border border-white/10 bg-white/[0.03] px-3 py-2"
          >
            {label}
          </a>
        ))}
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 pb-20 lg:grid-cols-[65fr_35fr] lg:gap-12 lg:pb-24">
        <ProductGallery items={galleryItems} />

        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
            {product.chapter}
          </p>
          <h1 className="brand-serif mt-5 text-4xl font-medium leading-none text-[#f4efe5] sm:text-6xl">
            {product.name}
          </h1>
          <div className="my-7 h-px w-24 bg-[#a78a50]" />
          <p className="brand-serif whitespace-pre-line text-2xl leading-tight text-[#d8c69c] sm:text-3xl">
            {product.tagline}
          </p>

          {product.storyMoment ? (
            <section className="mt-9 border-l border-[#a78a50] pl-6">
              <p className="text-[0.66rem] uppercase tracking-[0.26em] text-[#a78a50]">
                Story Moment
              </p>
              <div className="mt-4 space-y-4">
                {product.storyMoment.map((line) => (
                  <p
                    className="brand-serif text-2xl leading-snug text-[#f4efe5]"
                    key={line}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10 scroll-mt-48 border-t border-white/10 pt-8 lg:mt-12 lg:pt-9" id="story">
            <h2 className="brand-serif text-3xl text-[#f4efe5]">The Story</h2>
            {product.story.map((paragraph) => (
              <p
                className="mt-5 text-sm leading-8 text-[#c6c0b5]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <blockquote className="mt-10 border-y border-white/10 py-8">
            <p className="brand-serif whitespace-pre-line text-2xl leading-snug text-[#f4efe5]">
              {product.scripture}
            </p>
            <footer className="mt-5 text-xs uppercase tracking-[0.28em] text-[#a78a50]">
              {product.scriptureRef}
            </footer>
          </blockquote>

          <section className="mt-10 scroll-mt-48 space-y-8" id="details">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#a7a196]">
                Color
              </p>
              <div className="mt-4 flex gap-3">
                {["#343a27", "#5a4633", "#12110f"].map((color) => (
                  <span
                    key={color}
                    className="h-10 w-10 border border-white/15"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#a7a196]">
                Size
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {["S", "M", "L", "XL", "2X"].map((size) => (
                  <button
                    className="focus-ring min-h-11 border border-white/15 text-xs uppercase tracking-[0.18em] text-[#f4efe5] transition-colors hover:border-[#a78a50]"
                    type="button"
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#a7a196]">
                Quantity
              </p>
              <div className="mt-4 inline-flex min-h-11 items-center border border-white/15 px-5 text-sm text-[#f4efe5]">
                1
              </div>
            </div>

            <button
              type="button"
              className="focus-ring min-h-14 w-full border border-[#a78a50] bg-[#a78a50] px-6 text-xs uppercase tracking-[0.24em] text-[#080807] transition-colors hover:bg-transparent hover:text-[#f4efe5]"
            >
              Coming Soon
            </button>
          </section>

          <section className="mt-10 border-t border-white/10 pt-8">
            <div className="grid gap-4">
              {product.details.map((detail) => (
                <div key={detail} className="flex items-center gap-4">
                  <span className="h-2 w-2 border border-[#a78a50]" />
                  <p className="text-sm text-[#c6c0b5]">{detail}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="border border-white/10 bg-[#11100e] p-7"
          >
            <span className="mb-7 block h-8 w-8 border border-[#a78a50]" />
            <h2 className="brand-serif text-3xl text-[#f4efe5]">
              {feature.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#b9b1a5]">
              {feature.copy}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl scroll-mt-48 py-16 lg:py-24" id="experience">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Hidden Details
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
            Designed to be discovered slowly.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {product.hiddenDetails.map(([title, copy]) => (
            <article key={title} className="border border-white/10 bg-[#11100e]">
              <ImagePlaceholder label={title} className="min-h-[16rem]" />
              <div className="p-5">
                <h3 className="brand-serif text-2xl text-[#f4efe5]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#b9b1a5]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            The Chapter Experience
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
            More Than A Garment
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#c6c0b5]">
            Every chapter is built as an experience: a premium garment, a Field
            Journal, a Story Card, a Certificate of Story, and packaging that
            makes the moment feel considered before it ever feels commercial.
          </p>
        </div>
        <div className="grid gap-3 text-sm uppercase tracking-[0.22em] text-[#d8c69c]">
          {[
            "Premium Garment",
            "Field Journal",
            "Story Card",
            "Certificate of Story",
            "Premium Packaging",
          ].map((item) => (
            <div key={item} className="border border-white/10 px-5 py-4">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <ImagePlaceholder label="Chapter Box / Journal / Certificate" tall />
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Packaging
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
            The first moment matters.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#c6c0b5]">
            The unboxing experience is meant to feel quiet, weighty, and
            personal: Chapter Box, Field Journal, Certificate, garment, and
            Story Card gathered like artifacts from the chapter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Complete Chapter 01
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
            The story continues through each piece.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl scroll-mt-48 border-y border-white/10 py-16 text-center lg:py-24" id="impact">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          Your Purchase Has Purpose
        </p>
        <p className="brand-serif mt-5 text-3xl leading-tight text-[#f4efe5] sm:text-6xl">
          Every Chapter supports a real outreach initiative connected to the
          story being told.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 text-center lg:py-32">
        <p className="brand-serif whitespace-pre-line text-4xl leading-tight text-[#f4efe5] sm:text-7xl">
          {"Every Story Matters.\n\nYou Were Never Forgotten."}
        </p>
        <div className="mx-auto mt-12 h-px w-32 bg-[#a78a50]" />
        <Link
          href="/chapter-01"
          className="focus-ring mt-10 inline-flex text-xs uppercase tracking-[0.26em] text-[#d8c69c] hover:text-[#f4efe5]"
        >
          Return to Chapter 01
        </Link>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#080807]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs uppercase tracking-[0.2em] text-[#a78a50]">
              {product.name}
            </p>
            <p className="truncate text-sm text-[#c6c0b5]">Chapter 01</p>
          </div>
          <a
            href="#details"
            className="focus-ring shrink-0 border border-[#a78a50] bg-[#a78a50] px-4 py-3 text-[0.66rem] uppercase tracking-[0.2em] text-[#080807]"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </main>
  );
}
