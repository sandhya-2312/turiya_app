import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import { publicUrl } from '../utils/publicUrl'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero
        title="Blog"
        subtitle="Articles, case studies, and news on enterprise transformation, data, and intelligent automation."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden p-0">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={publicUrl(`img/${post.img}`)}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm text-[var(--color-ink-soft)]">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--color-ink)]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{post.summary}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)]"
                >
                  Read more
                  <ArrowRight size={16} strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  )
}
