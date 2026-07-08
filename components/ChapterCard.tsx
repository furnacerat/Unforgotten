import { ButtonLink } from "./ButtonLink";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ChapterCard() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="fade-in">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          First Collection
        </p>
        <h2 className="brand-serif mt-4 text-5xl font-medium text-[#f4efe5] sm:text-6xl">
          Chapter 01: The 99
        </h2>
        <p className="brand-serif mt-5 text-2xl text-[#d8c69c]">
          You were worth searching for.
        </p>
        <p className="mt-7 max-w-xl text-base leading-8 text-[#c6c0b5]">
          A cinematic opening chapter about the one who wandered, the search
          that did not stop, and the quiet mercy of being found.
        </p>
        <div className="mt-8">
          <ButtonLink href="/chapter-01">Enter Chapter 01</ButtonLink>
        </div>
      </div>
      <ImagePlaceholder
        label="Cinematic Chapter Image"
        src="/images/chapter-01-shepherd.png"
        alt="A shepherd walking through mist beside a stone pen of sheep."
        tall
      />
    </section>
  );
}
