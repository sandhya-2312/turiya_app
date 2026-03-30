import { NavLink, Outlet } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import PageHero from '../../components/ui/PageHero'

const subNavClass = ({ isActive }) =>
  [
    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-[var(--color-brand-500)] text-white'
      : 'text-[var(--color-ink-soft)] hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-600)]',
  ].join(' ')

export default function CompanyLayout() {
  return (
    <PageLayout>
      <PageHero
        title="Company"
        subtitle="Who we are, what we stand for, and why enterprises choose Turiyasoftech for digital transformation."
      />
      <div className="border-b border-slate-200/80 bg-white">
        <div className="container mx-auto flex max-w-[1320px] flex-wrap gap-2 px-[15px] py-4">
          <NavLink to="/company/overview" className={subNavClass}>
            Overview
          </NavLink>
          <NavLink to="/company/why-us" className={subNavClass}>
            Why Us
          </NavLink>
        </div>
      </div>
      <Outlet />
    </PageLayout>
  )
}
