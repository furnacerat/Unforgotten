import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageShell } from "@/components/PageShell";

export default function StoryPage() {
  return (
    <PageShell
      eyebrow="Our Story"
      title="For the ones who wondered if anyone still saw them."
      intro="UNFORGOTTEN is a premium storytelling brand rooted in the belief that restoration is still possible, even after the long silence."
    >
      <section className="mx-auto grid max-w-7xl gap-10 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7 text-lg leading-9 text-[#c6c0b5]">
          <p>
            Maybe you've felt invisible. Like the world kept moving while you
            stood still. Maybe you've carried regret longer than you wanted to.
            Maybe you've questioned your worth. UNFORGOTTEN exists because we
            believe no one is forgotten by God.
          </p>
          <p>
            Every chapter begins with a story, then becomes something tangible:
            a garment, a journal, a prompt, a reminder. Not noise. Not a trend.
            A quiet signal that your life still matters.
          </p>
          <p className="brand-serif text-3xl leading-snug text-[#f4efe5]">
            Every Story Matters.
          </p>
        </div>
        <ImagePlaceholder label="Story Portrait Placeholder" tall />
      </section>
    </PageShell>
  );
}
