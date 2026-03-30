import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'react-feather'
import PageLayout from '../components/layout/PageLayout'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import ServicesCtaBanner from '../components/ServicesCtaBanner'
import { getServiceById } from '../data/services'
import { serviceDetailsById } from '../data/serviceDetails'

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = serviceId ? getServiceById(serviceId) : undefined
  const details = service && serviceDetailsById[service.id]

  if (!service || !details) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  const breadcrumb = (
    <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[var(--color-muted)]">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
        <li>
          <Link to="/" className="font-medium text-[var(--color-brand-600)] hover:underline">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <ChevronRight size={14} className="opacity-60" aria-hidden />
          <Link to="/services" className="font-medium text-[var(--color-brand-600)] hover:underline">
            Services
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <ChevronRight size={14} className="opacity-60" aria-hidden />
          <span className="font-medium text-[var(--color-ink-soft)]">{service.title}</span>
        </li>
      </ol>
    </nav>
  )

  return (
    <PageLayout>
      <section className="border-b border-slate-200/80 bg-gradient-to-br from-[var(--color-brand-50)]/80 via-white to-slate-50/90 pt-[calc(72px+3rem)] pb-12 md:pt-[calc(72px+4rem)] md:pb-16">
        <div className="container mx-auto max-w-[1320px] px-[15px]">
          {breadcrumb}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <div className="shrink-0">
              <span className={`pasona-services-card__icon ${service.iconMod ?? ''}`}>
                <Icon size={30} strokeWidth={1.15} aria-hidden />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
                {details.heroLead}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section title="Overview" eyebrow="What we do">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
          {details.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/80" title="Capabilities" eyebrow="Delivery">
        <div className="grid gap-4 md:grid-cols-2 lg:max-w-5xl">
          {details.capabilities.map((line) => (
            <Card key={line} className="flex gap-3">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-500)]"
                aria-hidden
              />
              <p className="text-[var(--color-ink-soft)] leading-relaxed">{line}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Outcomes" eyebrow="Why it matters">
        <ul className="max-w-3xl space-y-4">
          {details.outcomes.map((line) => (
            <li
              key={line}
              className="flex gap-3 border-l-4 border-[var(--color-brand-400)] pl-4 text-[var(--color-ink-soft)] leading-relaxed"
            >
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <ServicesCtaBanner />
    </PageLayout>
  )
}
