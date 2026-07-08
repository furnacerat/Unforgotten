type PageShellProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageShell({ children, eyebrow, title, intro }: PageShellProps) {
  return (
    <main className="px-5 pt-32 sm:px-8">
      <section className="mx-auto max-w-7xl pb-16 pt-10">
        <div className="fade-in max-w-4xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-[#a78a50]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="brand-serif mt-5 text-5xl font-medium leading-tight text-[#f4efe5] sm:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#c6c0b5]">
              {intro}
            </p>
          ) : null}
        </div>
      </section>
      {children}
    </main>
  );
}
