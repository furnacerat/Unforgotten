import { ButtonLink } from "@/components/ButtonLink";
import { ChapterCard } from "@/components/ChapterCard";
import { EmailSignup } from "@/components/EmailSignup";
import { ImpactBlock } from "@/components/ImpactBlock";
import { JournalPreview } from "@/components/JournalPreview";
import { Logo } from "@/components/Logo";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="grain flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,8,7,0.35),rgba(8,8,7,0.92)),radial-gradient(circle_at_50%_28%,rgba(167,138,80,0.18),transparent_32rem),linear-gradient(135deg,#161512,#080807_62%)]" />
        <div className="fade-in-slow mx-auto flex max-w-4xl flex-col items-center text-center">
          <Logo centered />
          <h1 className="brand-serif mt-12 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl lg:text-8xl">
            You Were Never Forgotten.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6c0b5] sm:text-lg">
            Every Story Matters.
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <ButtonLink href="/chapter-01">Enter Chapter 01</ButtonLink>
            <ButtonLink href="/story" variant="secondary">
              Read Our Story
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="brand-serif fade-in text-3xl leading-snug text-[#f4efe5] sm:text-5xl">
            UNFORGOTTEN exists to remind people that no one is unseen, unwanted,
            or beyond redemption.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <ChapterCard />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Shop Preview"
            title="Pieces from the first chapter."
            copy="Not commerce yet. Just the first shape of a collection built around story, memory, and being found."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <JournalPreview />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <ImpactBlock />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <EmailSignup />
      </section>
    </main>
  );
}
