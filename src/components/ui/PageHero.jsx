export default function PageHero({ title, subtitle, className = '' }) {
  return (
    <section
      className={`border-b border-slate-200/80 bg-gradient-to-br from-[var(--color-brand-50)]/80 via-white to-slate-50/90 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-16 ${className}`}
    >
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
