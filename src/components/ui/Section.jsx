export default function Section({ title, eyebrow, children, className = '', innerClassName = '' }) {
  return (
    <section className={`py-14 md:py-20 ${className}`}>
      <div className={`container mx-auto max-w-[1320px] px-[15px] ${innerClassName}`}>
        {(eyebrow || title) && (
          <header className="mb-10 md:mb-12">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold text-[var(--color-ink)] md:text-3xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
