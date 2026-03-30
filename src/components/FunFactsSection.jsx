import { publicImg } from '../utils/publicUrl'

const FUN_FACTS = [
  { n: '10', l: 'Downloaded' },
  { n: '8', l: 'Feedback' },
  { n: '70', l: 'Workers' },
  { n: '111', l: 'Contributors' },
]

export default function FunFactsSection() {
  return (
    <section className="funfacts-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>We always try to understand users expectation</h2>
          <div className="bar"></div>
          <p>
          Ready to Get in Touch for Your Next Project?
          </p>
        </div>

        <div className="row">
          {FUN_FACTS.map((x) => (
            <div className="col-lg-3 col-md-3 col-6 col-sm-3" key={x.l}>
              <div className="funfact">
                <h3>
                  <span className="odometer">{x.n}</span>+
                </h3>
                <p>{x.l}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta-box">
          <h3>Have any question about us?</h3>
          <p>Don&apos;t hesitate to contact us</p>
          <a href="#" className="btn btn-primary">
            Contact Us
          </a>
        </div>

        <div className="map-bg">
          <img src={publicImg('map.png')} alt="" />
        </div>
      </div>
    </section>
  )
}
