import { useEffect } from 'react'
import { ArrowRight } from 'react-feather'
import { Link, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import ServicesCtaBanner from '../components/ServicesCtaBanner'
import { servicesList } from '../data/services'

function CardConstellationPattern() {
  return (
    <svg
      className="pasona-services-card__pattern"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity="0.55" stroke="#a8d7f5" strokeWidth="0.6">
        <path d="M24 140 L68 88 L118 96 L162 44" fill="none" />
        <path d="M68 88 L108 52 L152 72" fill="none" />
        <path d="M118 96 L152 72 L178 118" fill="none" />
        <path d="M68 88 L42 58" fill="none" />
        <path d="M162 44 L178 24" fill="none" />
      </g>
      <circle cx="24" cy="140" r="3.5" fill="#00a3ff" />
      <circle cx="68" cy="88" r="3.2" fill="#4dc8ff" />
      <circle cx="118" cy="96" r="3.2" fill="#0088e6" />
      <circle cx="162" cy="44" r="3" fill="#80d9ff" />
      <circle cx="108" cy="52" r="2.8" fill="#00c8ff" />
      <circle cx="152" cy="72" r="3" fill="#0066aa" />
      <circle cx="42" cy="58" r="2.5" fill="#b3e8ff" />
      <circle cx="178" cy="118" r="3" fill="#00a3ff" />
    </svg>
  )
}

export default function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash?.replace(/^#/, '')
    if (id) {
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash, location.pathname])

  return (
    <PageLayout>
      <PageHero
        title="Services"
        subtitle="From core systems to data and intelligent automation—practical services designed for industrial-scale digital transformation."
      />
      <Section className="services-page border-t border-slate-200/60">
        <div className="row services-page__row">
          {servicesList.map((service) => {
            const Icon = service.icon
            return (
              <div className="col-lg-4 col-md-6 d-flex" key={service.id} id={service.id}>
                <div className="single-ml-services-box pasona-services-card w-100 text-left">
                  <div className="pasona-services-card__surface text-left">
                    <CardConstellationPattern />
                    <div className="image">
                      <span className={`pasona-services-card__icon ${service.iconMod}`}>
                        <Icon size={30} strokeWidth={1.15} aria-hidden />
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="services-page__actions flex flex-wrap items-center gap-x-4 gap-y-2">
                      <Link to={`/services/${service.id}`} className="learn-more-btn">
                        <ArrowRight size={17} strokeWidth={2} aria-hidden />
                        Learn More
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
      <ServicesCtaBanner
        secondaryTo="/company/overview"
        secondaryLabel="About us"
      />
    </PageLayout>
  )
}
