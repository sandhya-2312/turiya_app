import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-[var(--color-brand-500)] text-white shadow-[0_4px_11px_rgba(var(--rgb-brand),0.38)] hover:bg-[var(--color-brand-600)] hover:shadow-[0_6px_15px_rgba(var(--rgb-brand),0.45)]',
  outline:
    'border-2 border-[var(--color-brand-500)] bg-transparent text-[var(--color-brand-600)] hover:bg-[var(--color-brand-50)]',
  ghost: 'bg-transparent text-[var(--color-brand-600)] hover:bg-[var(--color-brand-50)]',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  to,
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 disabled:opacity-50'
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (to != null) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
