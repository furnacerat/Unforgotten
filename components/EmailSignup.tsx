type EmailSignupProps = {
  compact?: boolean;
};

export function EmailSignup({ compact = false }: EmailSignupProps) {
  return (
    <section className={compact ? "" : "mx-auto max-w-3xl text-center"}>
      {!compact ? (
        <>
          <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
            Email Signup
          </p>
          <h2 className="brand-serif mt-4 text-4xl font-medium text-[#f4efe5] sm:text-5xl">
            Be first to enter the story.
          </h2>
        </>
      ) : (
        <p className="brand-serif text-2xl text-[#f4efe5]">
          Be first to enter the story.
        </p>
      )}
      <form className={`mt-7 flex flex-col gap-3 sm:flex-row ${compact ? "" : "justify-center"}`}>
        <label className="sr-only" htmlFor={compact ? "footer-email" : "email"}>
          Email address
        </label>
        <input
          id={compact ? "footer-email" : "email"}
          type="email"
          placeholder="Email address"
          className="focus-ring min-h-12 w-full border border-white/15 bg-white/[0.03] px-4 text-sm text-[#f4efe5] placeholder:text-[#8d8578] sm:max-w-sm"
        />
        <button
          type="button"
          className="focus-ring min-h-12 border border-[#a78a50] px-5 text-xs uppercase tracking-[0.22em] text-[#f4efe5] transition-colors hover:bg-[#a78a50] hover:text-[#080807]"
        >
          Join
        </button>
      </form>
    </section>
  );
}
