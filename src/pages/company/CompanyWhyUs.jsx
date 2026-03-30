import { Award, Shield, Users, Zap } from 'react-feather'
import Section from '../../components/ui/Section'
import Card from '../../components/ui/Card'

const advantages = [
  {
    title: 'Industrial depth',
    desc: 'Experience across oil & gas, manufacturing, marine, and regulated environments—so solutions fit how you actually work.',
    Icon: Award,
  },
  {
    title: 'Security & governance',
    desc: 'Design patterns that respect compliance, access control, and auditability from day one—not bolted on at the end.',
    Icon: Shield,
  },
  {
    title: 'Outcome-focused delivery',
    desc: 'Cross-functional teams aligned on measurable milestones, transparent communication, and sustainable handover.',
    Icon: Users,
  },
  {
    title: 'Modern platforms',
    desc: 'Pragmatic use of integration, data, cloud, and AI—chosen for fit, not fashion.',
    Icon: Zap,
  },
]

export default function CompanyWhyUs() {
  return (
    <Section title="Why choose us" eyebrow="Advantages">
      <div className="grid gap-6 md:grid-cols-2">
        {advantages.map(({ title, desc, Icon }) => (
          <Card key={title}>
            <div className="mb-4 inline-flex rounded-lg bg-[var(--color-brand-50)] p-3 text-[var(--color-brand-600)]">
              <Icon size={28} strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
            <p className="mt-2 text-[var(--color-ink-soft)] leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
