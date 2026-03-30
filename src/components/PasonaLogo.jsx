import { publicUrl } from '../utils/publicUrl'

/** TURIYA logo (spiral + wordmark + tagline). `variant`: `light` on dark hero; `dark` on light bar. */
export default function PasonaLogo({ variant = 'light' }) {
  return (
    <img
      src={publicUrl('img/turiya-logo.png')}
      alt="TURIYA — Tech Dreams Into Reality"
      className={`block h-[32px] w-auto max-w-[280px] object-contain object-left md:h-[38px] ${
        variant === 'light' ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]' : ''
      }`}
      width={280}
      height={48}
      loading="eager"
      decoding="async"
    />
  )
}
