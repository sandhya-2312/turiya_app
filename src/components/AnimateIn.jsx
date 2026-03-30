import { useInViewOnce } from '../hooks/useInViewOnce'

/**
 * Applies theme animate.css classes when the block scrolls into view
 * (mirrors v-wow / WOW.js behavior from the Vue template).
 */
export default function AnimateIn({
  children,
  className = '',
  animation = 'fadeInUp',
  delayMs = 0,
}) {
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `animated ${animation}` : ''}`.trim()}
      style={
        inView
          ? {
              animationDuration: '0.85s',
              animationDelay: delayMs ? `${delayMs}ms` : undefined,
              animationFillMode: 'both',
            }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  )
}
