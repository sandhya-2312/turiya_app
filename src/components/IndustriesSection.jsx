import { industries } from '../data/bigDataPage'

export default function IndustriesSection() {
  return (
    <section className="services-area ptb-80 industries-section-pasona">
      <div className="container">
        <div className="section-title">
          <h2>Industries We Serve</h2>
          <div className="bar"></div>
          <p>
          Empowering Industries with Smart Technology
          </p>
        </div>
        <div className="row industries-grid">
          {industries.map((name) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={name}>
              <a href="#" className="industry-item mb-4">
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
