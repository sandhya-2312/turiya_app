import Section from '../../components/ui/Section'
import Card from '../../components/ui/Card'

export default function CompanyOverview() {
  return (
    <>
      <Section title="Who we are" eyebrow="Introduction">
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Turiyasoftech partners with enterprises to unify systems, data, and intelligent automation. We
          combine deep industry experience with modern platforms so your teams can operate with clarity,
          speed, and confidence at scale.
        </p>
      </Section>

      <Section className="bg-slate-50/80" title="Mission" eyebrow="Purpose">
        <Card className="max-w-3xl">
          <p className="text-[var(--color-ink-soft)] leading-relaxed">
            Our mission is to help organizations turn complex operations into connected, data-driven systems—so
            people spend less time reconciling tools and more time delivering value.
          </p>
        </Card>
      </Section>

      <Section title="Vision" eyebrow="Where we're headed">
        <Card className="max-w-3xl">
          <p className="text-[var(--color-ink-soft)] leading-relaxed">
            We envision a world where enterprise software feels coherent: integrated by design, observable in
            real time, and augmented by AI where it genuinely helps—not as a buzzword, but as practical leverage.
          </p>
        </Card>
      </Section>
    </>
  )
}
