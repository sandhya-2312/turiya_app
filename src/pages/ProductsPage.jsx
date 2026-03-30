import PageLayout from '../components/layout/PageLayout'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { productsList } from '../data/products'

export default function ProductsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Products"
        subtitle="Explore our product portfolio—built to integrate with your enterprise stack and scale with your operations."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productsList.map(({ id, title, description, Icon }) => (
            <Card key={id} className="flex flex-col">
              <div className="mb-4 inline-flex w-fit rounded-lg bg-[var(--color-brand-50)] p-3 text-[var(--color-brand-600)]">
                <Icon size={28} strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
              <p className="mt-3 flex-1 text-[var(--color-ink-soft)] leading-relaxed">{description}</p>
              <div className="mt-6">
                <Button to="/contact" variant="outline">
                  Request a demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  )
}
