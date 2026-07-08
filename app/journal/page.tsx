import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageShell } from "@/components/PageShell";

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="The Journal"
      title="A pocket-sized place for the story to continue."
      intro="Every order includes a pocket-sized UNFORGOTTEN Field Journal. It begins with the chapter story, reflection prompts, and blank pages for the customer's own story."
    >
      <section className="mx-auto grid max-w-7xl gap-10 pb-28 lg:grid-cols-3">
        <ImagePlaceholder label="Journal Cover" className="lg:col-span-2" tall />
        <div className="space-y-6 border border-white/10 bg-[#11100e] p-8 text-base leading-8 text-[#c6c0b5]">
          <p className="brand-serif text-3xl leading-snug text-[#f4efe5]">
            The garment is the reminder. The journal is the response.
          </p>
          <p>
            Each chapter begins with a printed story and a handful of reflection
            prompts. The remaining pages are left open on purpose.
          </p>
          <p>
            Some people will write a prayer. Some will write a name. Some will
            write the first honest sentence they have written in years.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
