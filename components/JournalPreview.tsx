import { ImagePlaceholder } from "./ImagePlaceholder";

export function JournalPreview() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <ImagePlaceholder label="Pocket Field Journal" className="min-h-[25rem]" />
      <div className="fade-in lg:pl-10">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          The Field Journal
        </p>
        <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
          A story you can carry with you.
        </h2>
        <p className="mt-6 text-base leading-8 text-[#c6c0b5]">
          Every order includes a pocket-sized UNFORGOTTEN Field Journal. It
          begins with the chapter story, reflection prompts, and blank pages for
          the customer's own story.
        </p>
      </div>
    </section>
  );
}
