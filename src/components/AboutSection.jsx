import { publicUrl } from '../utils/publicUrl'

const img = (path) => publicUrl(`img/${path.replace(/^img\//, '')}`)

/** About — Turiyasoftech positioning */
export default function AboutSection() {
  return (
    <section className="about-section-pasona relative overflow-hidden" aria-labelledby="about-section-heading">
      <div className="about-section-pasona__decor" aria-hidden="true" />

      <div className="container relative z-[1]">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className="about-section-pasona__visual mx-auto max-w-[380px] lg:mx-0">
              <div className="about-section-pasona__accent about-section-pasona__accent--a" />
              <div className="about-section-pasona__accent about-section-pasona__accent--b" />
              <div className="about-section-pasona__photo-wrap about-section-pasona__photo-wrap--1">
                <img
                  src={img('discover-about-1.png')}
                  alt="Colleagues reviewing work together on a tablet"
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-section-pasona__photo-wrap about-section-pasona__photo-wrap--2">
                <img
                  src={img('discover-about-2.png')}
                  alt="Team collaborating and celebrating in the office"
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-lg-2 order-1">
            <div className="about-section-pasona__content py-4 lg:py-0 lg:pl-4">
              <h2
                id="about-section-heading"
                className="about-section-pasona__title mb-3 text-[clamp(1.4rem,3vw,1.95rem)] font-bold leading-[1.2] text-white"
              >
                Technology That Turns Ambition into Operating Reality
              </h2>
              <p className="about-section-pasona__text mb-4 text-[14px] leading-[1.65] text-white md:text-[15px]">
                Turiyasoftech helps enterprises modernize with ERP, integration, data engineering, and
                intelligent automation—bridging legacy and cloud so your teams gain clarity, speed, and
                reliability from strategy through implementation.
              </p>
              <a
                href="#"
                className="btn btn-primary about-section-pasona__cta inline-flex items-center justify-center"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
