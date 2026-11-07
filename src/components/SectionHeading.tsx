interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure-400">
        <span className="h-px w-6 bg-azure-400" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="text-base leading-[1.5] text-graphite-300 sm:text-lg">{description}</p>}
    </div>
  );
}
