import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'react-feather'
import PageLayout from '../components/layout/PageLayout'
import '../styles/contact-page.css'

const PHONE_DISPLAY = '+91 95000 05741'
const EMAIL = 'info@turiyasoftech.com'
const ADDRESS =
  'Nascom CoE, Opp. Department of Marine Engineering, Andhra University, Visakhapatnam, Andhra Pradesh, India 530003'

/** Asymmetric horizontal padding: less on the right */
const CONTACT_GUTTER =
  'pl-6 pr-4 sm:pl-10 sm:pr-7 md:pl-14 md:pr-10 lg:pl-16 lg:pr-10 xl:pl-20 xl:pr-12'

function IconPhone({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
      />
    </svg>
  )
}

function IconMail({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zm-16 100.2V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
      />
    </svg>
  )
}

function IconMap({ className }) {
  return (
    <svg className={className} viewBox="0 0 384 512" aria-hidden>
      <path
        fill="currentColor"
        d="M384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0s192 86 192 192z"
      />
    </svg>
  )
}

function IconSales({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
      />
    </svg>
  )
}

function IconSupport({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40C0 114.6 114.6 0 256 0s256 114.6 256 256v144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24h-32c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4.1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zm-112 160h16c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32h-16c-35.3 0-64-28.7-64-64v-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64h-16c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
      />
    </svg>
  )
}

function IconDemo({ className }) {
  return (
    <svg className={className} viewBox="0 0 384 512" aria-hidden>
      <path
        fill="currentColor"
        d="M0 192h176V0h-16C71.6 0 0 71.6 0 160v32zm0 32v128c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H0zm384-32v-32C384 71.6 312.4 0 224 0h-16v192h176z"
      />
    </svg>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout>
      <div className="visionex-contact bg-white">
        {/* Hero — matches visionex-astro: pt-24, centered title + breadcrumb */}
        <section className="pt-[calc(72px+1.5rem)] md:pt-[calc(72px+2rem)]">
          <div className={`mx-auto w-full max-w-4xl ${CONTACT_GUTTER}`}>
            <div className="py-10 text-center md:py-14">
              <h1 className="vx-underline-svg text-[clamp(1.625rem,3.8vw,2.35rem)] font-bold leading-tight tracking-tight">
                <strong className="font-extrabold">Contact Us</strong>
                <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path
                    d="M0 10 Q50 2 100 10 T200 10"
                    fill="none"
                    stroke="var(--color-brand-500)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>
              <nav aria-label="Breadcrumb" className="mt-3 flex justify-center">
                <ol className="inline-flex items-center gap-1 capitalize" role="list">
                  <li className="flex items-center" role="listitem">
                    <Link
                      to="/"
                      className="text-[var(--vx-text-dark)] transition-colors hover:text-[var(--color-brand-600)]"
                      aria-label="Home"
                    >
                      <Home size={18} strokeWidth={2} aria-hidden />
                    </Link>
                  </li>
                  <li className="flex items-center text-[var(--vx-text-light)]" role="listitem">
                    <ChevronRight size={15} className="mx-1 shrink-0 opacity-70" aria-hidden />
                    <span className="text-sm font-medium sm:text-base">Contact</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Form + sidebar — bg-section */}
        <section className="border-t border-[#eaeaea] bg-[#fbfbfb] py-10 md:py-14">
          <div className={`mx-auto w-full max-w-6xl ${CONTACT_GUTTER}`}>
            <div className="text-center">
              <h2 className="vx-section-title mb-8 text-xl font-bold sm:text-xl md:text-[1.65rem]">
                Let&apos;s get in touch!
              </h2>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-x-12 lg:gap-y-0 xl:gap-x-16 2xl:gap-x-20">
              <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:min-w-0 lg:flex-[1_1_50%]">
                {submitted ? (
                  <p className="rounded-lg border border-[#eaeaea] bg-white p-5 text-center text-sm leading-relaxed text-[var(--vx-text)] shadow-sm">
                    Thank you—your message has been recorded. We&apos;ll get back to you shortly.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full" noValidate>
                    <div className="mb-8">
                      <label htmlFor="vx-name" className="vx-form-label">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="vx-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="name"
                        className="vx-form-input"
                      />
                    </div>
                    <div className="mb-8">
                      <label htmlFor="vx-email" className="vx-form-label">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="vx-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john.doe@email.com"
                        className="vx-form-input"
                      />
                    </div>
                    <div className="mb-8">
                      <label htmlFor="vx-message" className="vx-form-label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="vx-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Write here your details message..."
                        className="vx-form-input min-h-[5.25rem] resize-y"
                      />
                    </div>
                    <button type="submit" className="vx-btn-primary">
                      Send message
                    </button>
                  </form>
                )}
              </div>

              <aside className="mx-auto w-full max-w-[30rem] text-left lg:mx-0 lg:max-w-none lg:min-w-0 lg:flex-[0_1_46%]">
                <h3 className="mb-3 text-xl font-medium leading-tight tracking-tight text-[#0d0d0d] sm:text-[1.5rem] md:text-2xl">
                  If you need to contact us
                </h3>
                <p className="mb-5 text-[0.9375rem] font-medium leading-relaxed text-[var(--color-muted)] md:leading-[1.65]">
                  We value your feedback, inquiries, and suggestions. If you have any questions or need assistance,
                  please don&apos;t hesitate to get in touch with us. We are here to help!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-500)] text-white shadow-sm sm:h-11 sm:w-11">
                      <IconPhone className="h-5 w-5" />
                    </div>
                    <p className="min-w-0 text-[0.9375rem] font-medium leading-snug text-[var(--color-muted)]">
                      {PHONE_DISPLAY}
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-500)] text-white shadow-sm sm:h-11 sm:w-11">
                      <IconMail className="h-5 w-5" />
                    </div>
                    <p className="min-w-0 text-[0.9375rem] font-medium leading-snug text-[var(--color-muted)]">
                      <a href={`mailto:${EMAIL}`} className="text-[var(--color-muted)] hover:text-[var(--color-brand-600)] hover:underline">
                        {EMAIL}
                      </a>
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand-500)] text-white shadow-sm sm:h-11 sm:w-11">
                      <IconMap className="h-[1.05rem] w-[1.05rem]" />
                    </div>
                    <p className="min-w-0 flex-1 text-[0.9375rem] font-medium leading-[1.6] text-[var(--color-muted)]">
                      {ADDRESS}
                    </p>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* Three cards */}
        <section className="border-t border-[#eaeaea] py-10 md:py-14">
          <div className={`mx-auto w-full max-w-5xl ${CONTACT_GUTTER}`}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  Icon: IconSales,
                  title: 'Sales',
                  body: 'Need help? Our support team is available to answer of 24x7',
                },
                {
                  Icon: IconSupport,
                  title: 'Support',
                  body: 'Need help? Our support team is available to answer of 24x7',
                },
                {
                  Icon: IconDemo,
                  title: 'Request Demo',
                  body: 'Have an out of the box idea for a new Al Demo to add.',
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-lg border-2 border-[#eaeaea] transition-colors duration-200 hover:border-[var(--color-brand-500)]"
                >
                  <div className="flex flex-col items-center px-4 py-6 text-center md:px-6 md:py-8">
                    <div className="mb-3 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded bg-[var(--color-brand-500)] text-white md:h-14 md:w-14">
                      <Icon className="h-8 w-8 md:h-9 md:w-9" />
                    </div>
                    <h4 className="mb-2 text-base font-bold md:text-lg">{title}</h4>
                    <p className="mb-3 text-sm font-medium leading-relaxed text-[var(--vx-text)] md:text-[0.9375rem]">
                      {body}
                    </p>
                    <a href={`mailto:${EMAIL}`} className="vx-btn-secondary no-underline">
                      Talk To Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
