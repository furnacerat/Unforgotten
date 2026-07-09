import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const openingLines = [
  "For the quiet hearts.",
  "For the ones who've carried regret longer than they meant to.",
  "For the ones who felt the world move on without them.",
  "For the ones who prayed in silence, hoping God still heard.",
  "Unforgotten was created for you.",
];

const storySections = [
  {
    eyebrow: "Where Restoration Meets Storytelling",
    title: "Restoration is still possible.",
    paragraphs: [
      "Unforgotten is a premium storytelling brand rooted in a simple, unshakeable belief: restoration is still possible, even after the long silence.",
      "We believe God still pursues. God still remembers. God still restores.",
      "And every story He touches becomes something worth carrying.",
    ],
  },
  {
    eyebrow: "Why Stories Matter",
    title: "Stories are living reminders.",
    paragraphs: [
      "Stories shape us. They remind us who we are, where we've been, and who we're becoming.",
      "The Bible is filled with people who felt lost, overlooked, or broken, yet God called them by name.",
      "None were abandoned. None were invisible. None were forgotten.",
      "These stories aren't ancient echoes. They're living reminders that your life still matters.",
    ],
  },
  {
    eyebrow: "Why Clothing?",
    title: "Stories deserve to be carried.",
    paragraphs: [
      "Because stories deserve to be carried, not just read.",
      "We turn biblical narratives into modern, meaningful garments. Not loud. Not trendy. Not Christian merch.",
      "But quiet signals of faith, identity, and redemption. Pieces you can wear in the real world, reminders woven into fabric, shape, and symbol.",
      "Every drop begins with a story. Every garment carries a truth.",
    ],
  },
  {
    eyebrow: "The Process",
    title: "A garment that speaks without shouting.",
    paragraphs: [
      "We start with Scripture: a moment, a character, a turning point.",
      "We study it. Sketch it. Break it apart. Rebuild it visually.",
      "Colors chosen with intention. Symbols drawn from the narrative. Textures shaped by the emotion of the story.",
      "The result is a garment that speaks without shouting. A wearable reminder that you were never forgotten.",
    ],
  },
  {
    eyebrow: "Chapter 01 - The 99",
    title: "The God who goes after the one.",
    paragraphs: [
      "The first chapter begins with a shepherd who left ninety-nine to find the one who wandered.",
      "A story of pursuit. A story of love. A story of being Unforgotten.",
      "This chapter becomes the foundation of our first collection, a visual retelling of the God who goes after the lost, the hurting, the overlooked, the one.",
    ],
  },
];

export default function StoryPage() {
  return (
    <main className="px-5 pt-36 sm:px-8 lg:pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:pb-28">
        <div className="fade-in">
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Our Story
          </p>
          <h1 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
            For the ones who wondered if anyone still saw them.
          </h1>
          <div className="mt-10 space-y-5 border-l border-[#a78a50]/70 pl-6 text-base leading-8 text-[#c6c0b5] sm:text-lg">
            {openingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <ImagePlaceholder
          label="Story Portrait"
          src="/images/story-portrait.png"
          alt="UNFORGOTTEN story artwork showing a figure walking through a stone arch toward light."
          imageFit="contain"
          className="!min-h-0 aspect-[3/2]"
        />
      </section>

      <section className="mx-auto max-w-7xl border-y border-white/10 py-16 text-center lg:py-24">
        <p className="brand-serif mx-auto max-w-4xl text-4xl leading-tight text-[#f4efe5] sm:text-6xl">
          God still sees. God still calls. God still restores.
        </p>
      </section>

      <section className="mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-16">
          {storySections.map((section, index) => (
            <article
              className={`grid gap-8 border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 ${
                index === 0 ? "" : "border-t pt-16"
              }`}
              key={section.eyebrow}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
                  {section.eyebrow}
                </p>
                <h2 className="brand-serif mt-4 text-4xl font-medium leading-tight text-[#f4efe5] sm:text-5xl">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-[#c6c0b5] sm:text-lg">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-28 text-center lg:pb-36">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          Every Story Matters. Including Yours.
        </p>
        <p className="brand-serif mt-6 text-4xl leading-tight text-[#f4efe5] sm:text-6xl">
          Your story is not over. Your story is not wasted. Your story is
          Unforgotten.
        </p>
        <div className="mx-auto mt-12 h-px w-32 bg-[#a78a50]" />
      </section>
    </main>
  );
}
