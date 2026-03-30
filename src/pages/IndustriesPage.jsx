import PageLayout from '../components/layout/PageLayout'
import { industriesPageItems } from '../data/industriesPage'

export default function IndustriesPage() {
  return (
    <PageLayout>
      {/* Hero — dark blue → cyan; does not affect home */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-900)] via-[var(--color-brand-700)] to-[var(--color-brand-300)] pt-[calc(72px+3.5rem)] pb-14 md:pt-[calc(72px+4.5rem)] md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(77,200,255,0.35) 0%, transparent 40%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1320px] px-[15px] text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Industries We Transform
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:mx-0 md:text-lg">
            Delivering intelligent digital solutions tailored to complex industrial environments.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#industries-grid"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/20 hover:shadow-md"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-slate-200/80 bg-[var(--color-surface)] py-14 md:py-16">
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Digital transformation is not one-size-fits-all. We partner with industrial organizations to connect
            systems, unlock trustworthy data, and apply automation where it improves safety, reliability, and
            speed—grounded in the compliance and operational realities of your sector.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section
        id="industries-grid"
        className="bg-gradient-to-b from-slate-50/90 to-white py-14 md:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesPageItems.map(({ id, title, Icon, description }) => (
              <article
                key={id}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm ring-0 ring-transparent transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--color-brand-200)] hover:shadow-lg hover:shadow-[0_20px_45px_-12px_rgba(var(--rgb-brand),0.22)] hover:ring-2 hover:ring-[var(--color-brand-400)]/30 md:p-8"
              >
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] ring-1 ring-[var(--color-brand-100)] transition-colors duration-300 group-hover:bg-[var(--color-brand-100)]/80 group-hover:text-[var(--color-brand-700)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--color-ink)]">{title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px] md:leading-[1.75]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
