export default function WhatWeDoSection() {
  return (
    <section className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>What We Do</h2>
          <div className="bar"></div>
          <p>
            From discovery to delivery—we help you research what matters, analyze what moves the needle,
            and implement technology that scales with your operations.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="bx bx-search-alt" aria-hidden="true"></i>
              </div>
              <h3>
                <a href="#">Research</a>
              </h3>
              <p>
                Evidence-led insight on markets, customers, and investments—so strategy and roadmaps stay
                aligned with real demand.
              </p>
              <ul className="what-we-do-links">
                <li>
                  <a href="#">Market Research</a>
                </li>
                <li>
                  <a href="#">Investment Research</a>
                </li>
                <li>
                  <a href="#">Read More</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="bx bx-line-chart" aria-hidden="true"></i>
              </div>
              <h3>
                <a href="#">Analytics</a>
              </h3>
              <p>
                Turn operational and business data into trusted metrics, forecasts, and dashboards—so
                decisions are fast and consistent.
              </p>
              <ul className="what-we-do-links">
                <li>
                  <a href="#">Data Analytics</a>
                </li>
                <li>
                  <a href="#">Business Intelligence</a>
                </li>
                <li>
                  <a href="#">Read More</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-md-3 offset-lg-0">
            <div className="single-services-box">
              <div className="icon">
                <i className="bx bx-microchip" aria-hidden="true"></i>
              </div>
              <h3>
                <a href="#">Technology</a>
              </h3>
              <p>
                Design and run integrations, platforms, and intelligent automation—secure, observable,
                and built to grow with your enterprise.
              </p>
              <ul className="what-we-do-links">
                <li>
                  <a href="#">Intelligence Automation</a>
                </li>
                <li>
                  <a href="#">Quality Engineering</a>
                </li>
                <li>
                  <a href="#">Read More</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
