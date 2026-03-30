import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'

/**
 * Bottom CTA for services flows — gradient band, white primary button, optional secondary text link.
 */
export default function ServicesCtaBanner({
  secondaryTo = '/services',
  secondaryLabel = 'All services',
  showSecondary = true,
}) {
  return (
    <section className="services-cta-banner border-t border-slate-200/70">
      <div className="container mx-auto max-w-[1320px] px-[15px] py-14 md:py-16 lg:py-[4.25rem]">
        <div className="services-cta-banner__inner flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-16">
          <div className="max-w-xl text-left">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-[1.65rem] lg:text-[1.85rem]">
              Ready to talk?
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
              Tell us about your goals—we&apos;ll connect you with the right experts.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-end sm:gap-5">
            <Link
              to="/contact"
              className="services-cta-banner__btn inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] shadow-[0_8px_28px_rgba(0,163,255,0.18),0_2px_10px_rgba(15,49,76,0.06)] ring-1 ring-slate-200/90 transition hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-700)] hover:shadow-[0_12px_36px_rgba(0,163,255,0.22),0_2px_10px_rgba(15,49,76,0.08)]"
            >
              Get in touch
              <ArrowRight size={18} strokeWidth={2} className="text-[var(--color-brand-500)]" aria-hidden />
            </Link>
            {showSecondary && (
              <Link
                to={secondaryTo}
                className="text-center text-sm font-bold text-[var(--color-ink)] transition hover:text-[var(--color-brand-600)] sm:text-left md:text-base"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
