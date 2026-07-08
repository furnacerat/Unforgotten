import { EmailSignup } from "@/components/EmailSignup";
import { PageShell } from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Be first to enter the story."
      intro="Join the early list for Chapter 01 updates, journal previews, and launch notes."
    >
      <section className="mx-auto max-w-4xl pb-28">
        <div className="border border-white/10 bg-[#11100e] px-6 py-12 sm:px-10">
          <EmailSignup />
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-7 text-[#a7a196]">
            Social channels are placeholders for now. The first public chapter
            will open here before live commerce begins.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
