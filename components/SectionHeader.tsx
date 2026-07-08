type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="fade-in max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#a78a50]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="brand-serif text-4xl font-medium leading-tight text-[#f4efe5] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#c6c0b5] sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
