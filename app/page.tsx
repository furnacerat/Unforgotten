import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content";

const storyPillars = [
  {
    title: "Stories Shape Us",
    copy: "Stories remind us who we are and who we're becoming.",
  },
  {
    title: "Stories Restore Us",
    copy: "Biblical narratives carry truths worth remembering.",
  },
  {
    title: "Stories Become Artifacts",
    copy: "We turn those truths into garments you can carry into everyday life.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="grain relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8">
        <img
          src="/images/chapter-01-shepherd.png"
          alt="A cinematic shepherd walking through mist beside sheep."
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,7,0.94),rgba(8,8,7,0.68)_48%,rgba(8,8,7,0.9)),linear-gradient(180deg,rgba(8,8,7,0.24),rgba(8,8,7,0.96))]" />

        <div className="fade-in-slow mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
              UNFORGOTTEN
            </p>
            <h1 className="brand-serif mt-6 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl lg:text-8xl">
              For the ones who wondered if anyone still saw them.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8c69c] sm:text-xl">
              Every story begins in the silence.
            </p>
            <div className="mt-10">
              <ButtonLink href="/story">Begin the Story</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-white/10 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
              Brand Identity
            </p>
            <h2 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
              UNFORGOTTEN
            </h2>
            <div className="mt-6 h-px w-32 bg-[#a78a50]" />
          </div>
          <div className="max-w-3xl">
            <p className="brand-serif text-3xl leading-tight text-[#f4efe5] sm:text-5xl">
              A premium storytelling brand rooted in the belief that no one is
              forgotten by God.
            </p>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#c6c0b5] sm:text-lg">
              <p>
                We create artifacts inspired by biblical narratives - garments
                shaped by stories of pursuit, redemption, and restoration.
              </p>
              <p>Not noise. Not trends.</p>
              <p>Just reminders that your life still matters.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
              Why Stories Matter
            </p>
            <h2 className="brand-serif mt-4 text-4xl font-medium leading-tight text-[#f4efe5] sm:text-6xl">
              The truth we remember becomes the life we carry.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {storyPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="border border-white/10 bg-[#11100e] p-7 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
                  0{index + 1}
                </p>
                <h3 className="brand-serif mt-8 text-3xl leading-tight text-[#f4efe5]">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#b9b1a5]">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImagePlaceholder
            label="Chapter 01 - The 99"
            src="/images/chapter-01-shepherd.png"
            alt="A shepherd walking through mist beside a stone pen of sheep."
            className="min-h-[28rem] lg:min-h-[40rem]"
          />
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
              Chapter 01 - The 99
            </p>
            <h2 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
              The story of the One who was pursued.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[#c6c0b5] sm:text-lg">
              <p>
                Inspired by the Shepherd who left ninety-nine to find the one
                who wandered.
              </p>
              <p>A story of pursuit, love, and being Unforgotten.</p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/chapter-01">Explore the Chapter</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
                Featured Artifacts
              </p>
              <h2 className="brand-serif mt-4 text-4xl font-medium leading-tight text-[#f4efe5] sm:text-6xl">
                Pieces from the first story world.
              </h2>
            </div>
            <ButtonLink href="/shop-preview" variant="secondary">
              View the Collection
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
              The Journal
            </p>
            <h2 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
              Reflections, prompts, and stories for the ones still walking.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6c0b5] sm:text-lg">
              A companion for the chapter beyond the garment - a quiet place to
              write what you are learning, carrying, praying, and becoming.
            </p>
          </div>
          <ImagePlaceholder
            label="Pocket Field Journal"
            src="/images/field-journal.png"
            alt="UNFORGOTTEN pocket field journal with cover, back, spine, inside pages, and detail views."
            imageFit="contain"
            className="min-h-[24rem] bg-[#f4efe5]"
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#a78a50]">
            Impact
          </p>
          <h2 className="brand-serif mt-5 text-4xl font-medium leading-tight text-[#f4efe5] sm:text-6xl">
            Real Stories. Real People. Real Impact.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#c6c0b5] sm:text-lg">
            Every chapter supports restoration efforts - counseling, recovery,
            and faith-based outreach for those who feel forgotten.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-5xl border-y border-white/10 py-16 text-center lg:py-24">
          <p className="brand-serif text-4xl leading-tight text-[#f4efe5] sm:text-7xl">
            Every story matters. Including yours.
          </p>
          <div className="mx-auto mt-12 h-px w-32 bg-[#a78a50]" />
        </div>
      </section>
    </main>
  );
}
