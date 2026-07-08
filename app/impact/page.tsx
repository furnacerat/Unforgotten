import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageShell } from "@/components/PageShell";

export default function ImpactPage() {
  return (
    <PageShell
      eyebrow="Impact"
      title="Every chapter will support a real outreach effort connected to the story being told."
      intro="The impact model is intentionally being built with care. No percentages or promises are being claimed before the partnerships are ready."
    >
      <section className="mx-auto grid max-w-7xl gap-10 pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7 text-lg leading-9 text-[#c6c0b5]">
          <p>
            UNFORGOTTEN is not trying to turn pain into a slogan. Each chapter
            will move toward a real outreach effort that belongs to the story:
            the people, places, and needs the chapter is asking us to notice.
          </p>
          <p>
            The first version of this page holds space for that future work
            without overstating what has not yet been finalized.
          </p>
        </div>
        <ImagePlaceholder label="Outreach Image Placeholder" tall />
      </section>
    </PageShell>
  );
}
