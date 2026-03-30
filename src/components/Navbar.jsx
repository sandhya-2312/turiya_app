import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Link, NavLink, useLocation } from 'react-router-dom'
import PasonaLogo from './PasonaLogo'

const CLOSE_DELAY_MS = 100

const MENU_ROOT = {
  company: '/company',
  services: '/services',
  blog: '/blog',
}

const NAV_MENUS = [
  {
    id: 'company',
    label: 'Company',
    items: [
      { label: 'Overview', to: '/company/overview' },
      { label: 'Why Us', to: '/company/why-us' },
      { label: 'Industries', to: '/industries' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    items: [
      { label: 'ERP & Core Systems', to: '/services/erp' },
      { label: 'Enterprise Application Integration', to: '/services/eai' },
      { label: 'Data Engineering & Business Intelligence', to: '/services/de-bi' },
      { label: 'Agentic AI', to: '/services/agentic-ai' },
      { label: 'Internet of Things', to: '/services/iot' },
      { label: 'Digital Twins', to: '/services/digital-twins' },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    items: [
      { label: 'Articles', to: '/blog' },
      { label: 'Case Studies', to: '/blog' },
      { label: 'News', to: '/blog' },
    ],
  },
]

function navLinkClassName({ isActive }, scrolled) {
  const base = scrolled
    ? 'inline-flex items-center whitespace-nowrap text-[15px] font-medium tracking-wide transition-colors duration-150 rounded-md px-2 py-1 -mx-1'
    : 'inline-flex items-center whitespace-nowrap text-[15px] font-medium tracking-wide transition-colors duration-150 rounded-md px-2 py-1 -mx-1'
  const hover = scrolled
    ? 'text-[var(--color-ink-soft)] hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-600)]'
    : 'text-white hover:bg-white/10 hover:text-[var(--color-brand-200)]'
  const active = scrolled
    ? isActive
      ? ' !bg-[var(--color-brand-50)] !text-[var(--color-brand-600)]'
      : ''
    : isActive
      ? ' !bg-white/10 !text-[var(--color-brand-200)]'
      : ''
  return `${base} ${hover}${active}`
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const navClusterRef = useRef(null)
  const closeTimerRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const effectiveScrolled = !isHome || scrolled

  const clearCloseTimer = () => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null)
      closeTimerRef.current = null
    }, CLOSE_DELAY_MS)
  }

  const handleDropdownEnter = (id) => {
    clearCloseTimer()
    setOpenMenu(id)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onDocPointerDown = (e) => {
      if (!navClusterRef.current?.contains(e.target)) {
        clearCloseTimer()
        setOpenMenu(null)
      }
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearCloseTimer()
        setOpenMenu(null)
      }
    }

    document.addEventListener('pointerdown', onDocPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onDocPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(
    () => () => {
      clearCloseTimer()
    },
    []
  )

  const navHoverScrolled =
    'rounded-md px-2 py-1 -mx-1 transition-colors duration-150 hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-600)]'
  const navHoverHero =
    'rounded-md px-2 py-1 -mx-1 transition-colors duration-150 hover:bg-white/10 hover:text-[var(--color-brand-200)]'

  const linkClass = effectiveScrolled
    ? `inline-flex flex-nowrap items-center gap-1 whitespace-nowrap text-[15px] font-medium tracking-wide text-[var(--color-ink-soft)] ${navHoverScrolled}`
    : `inline-flex flex-nowrap items-center gap-1 whitespace-nowrap text-[15px] font-medium tracking-wide text-white ${navHoverHero}`

  /** Hover/open only — no persistent “pill” when a child route is active (avoids blocked look on Services, etc.) */
  const triggerClass = (isOpen) =>
    [
      linkClass,
      'rounded-md font-inherit border-0 bg-transparent p-0 no-underline',
      /* Open / hover flyout */
      isOpen && effectiveScrolled ? '!bg-[var(--color-brand-50)] !text-[var(--color-brand-600)]' : '',
      isOpen && !effectiveScrolled ? '!bg-white/10 !text-[var(--color-brand-200)]' : '',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <nav
      data-navbar-theme={effectiveScrolled ? 'light' : 'dark'}
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-[background-color,box-shadow,padding,border-color] duration-300 ${
        effectiveScrolled
          ? 'border-b border-slate-200/90 bg-white/95 py-[8px] shadow-[0_4px_24px_rgba(0,60,100,0.1)] backdrop-blur-md'
          : 'border-b border-white/10 bg-[rgba(6,28,48,0.42)] py-[12px] backdrop-blur-[10px]'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-[15px]">
        <div className="shrink-0">
          <Link to="/" className="inline-block">
            <PasonaLogo variant={effectiveScrolled ? 'dark' : 'light'} />
          </Link>
        </div>

        <div
          ref={navClusterRef}
          className="nav-cluster-links hidden items-center gap-x-[35px] lg:flex"
        >
          <NavLink to="/" end className={(p) => navLinkClassName(p, effectiveScrolled)}>
            Home
          </NavLink>
          {NAV_MENUS.map((menu) => {
            const isOpen = openMenu === menu.id
            return (
              <div
                key={menu.id}
                className="nav-dropdown relative w-max"
                onMouseEnter={() => handleDropdownEnter(menu.id)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to={MENU_ROOT[menu.id]}
                  className={triggerClass(isOpen)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-controls={`nav-menu-${menu.id}`}
                  id={`nav-trigger-${menu.id}`}
                  onClick={() => {
                    clearCloseTimer()
                    setOpenMenu(null)
                  }}
                >
                  {menu.label}
                  <ChevronDown
                    className={`inline-block shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    size={14}
                    strokeWidth={2}
                    aria-hidden
                  />
                </Link>
                {isOpen && (
                  <div className="nav-dropdown-flyout">
                    <div
                      id={`nav-menu-${menu.id}`}
                      role="menu"
                      aria-labelledby={`nav-trigger-${menu.id}`}
                      className="nav-dropdown-panel"
                    >
                      {menu.items.map((item) => (
                        <Link
                          key={item.to + item.label}
                          to={item.to}
                          role="menuitem"
                          className="nav-dropdown-link"
                          onClick={() => {
                            clearCloseTimer()
                            setOpenMenu(null)
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <NavLink to="/products" className={(p) => navLinkClassName(p, effectiveScrolled)}>
            Products
          </NavLink>
          <NavLink to="/contact" className={(p) => navLinkClassName(p, effectiveScrolled)}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="hidden rounded-[4px] bg-[var(--color-brand-500)] px-[18px] py-[9px] text-[13px] font-semibold text-white shadow-[0_4px_11px_rgba(var(--rgb-brand),0.38)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[var(--color-brand-600)] hover:shadow-[0_6px_15px_rgba(var(--rgb-brand),0.45)] md:block"
          >
            Turiya3D
          </button>
        </div>
      </div>
    </nav>
  )
}
