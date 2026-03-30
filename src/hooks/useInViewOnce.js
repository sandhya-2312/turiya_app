import { useEffect, useRef, useState } from 'react'

const defaultOpts = {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.08,
}

/** Adds a class when the element enters the viewport (once). */
export function useInViewOnce() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, defaultOpts)

    obs.observe(el)
    return () => obs.disconnect()
  }, [inView])

  return { ref, inView }
}
