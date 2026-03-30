import { Server, Code, Users } from 'react-feather'
import { publicImg } from '../utils/publicUrl'

/** Main banner — Vue `MainBanner` / Pasona Big Data Analytics demo. */
export default function BigDataHero({ photoHero = true }) {
  const iconSize = photoHero ? 20 : 26
  const shortCopy =
    'Connect systems and data so teams can act on one trusted view of operations.'
  const longCopy =
    'From assessment to rollout, we align people, processes, and platforms so transformation sticks—securely and at industrial scale.'

  return (
    <div
      className={`bigdata-analytics-banner ml-main-section pt-14${photoHero ? ' pasona-bigdata-photo' : ''}`}
    >
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>Digital Transformation made Easy for Industries</h1>
          <p>
            We unify enterprise systems, data, and intelligent automation—so your teams can modernize
            with clarity, speed, and confidence at industrial scale.
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>

      <div className={`banner-boxes-area${photoHero ? ' banner-boxes-area--photo' : ''}`}>
        <div className="container">
          <div className={`row${photoHero ? ' banner-feature-cards-grid' : ''}`}>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon banner-box-icon banner-box-icon--server">
                  <Server size={iconSize} strokeWidth={1.75} />
                </div>
                <h3>Analyze Your Data</h3>
                <p>{photoHero ? shortCopy : longCopy}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon banner-box-icon banner-box-icon--code">
                  <Code size={iconSize} strokeWidth={1.75} />
                </div>
                <h3>Customized Plan</h3>
                <p>{photoHero ? shortCopy : longCopy}</p>
              </div>
            </div>
            <div
              className={
                photoHero
                  ? 'col-lg-4 col-md-6 col-sm-6'
                  : 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
              }
            >
              <div className="single-banner-boxes">
                <div className="icon banner-box-icon banner-box-icon--users">
                  <Users size={iconSize} strokeWidth={1.75} />
                </div>
                <h3>Implement Solution</h3>
                <p>{photoHero ? shortCopy : longCopy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!photoHero ? (
        <>
          <div className="shape1">
            <img src={publicImg('shape1.png')} alt="" />
          </div>
          <div className="shape3">
            <img src={publicImg('shape3.svg')} alt="" />
          </div>
          <div className="shape4">
            <img src={publicImg('shape4.svg')} alt="" />
          </div>
          <div className="shape6 rotateme">
            <img src={publicImg('shape4.svg')} alt="" />
          </div>
          <div className="shape7">
            <img src={publicImg('shape4.svg')} alt="" />
          </div>
          <div className="shape8 rotateme">
            <img src={publicImg('shape2.svg')} alt="" />
          </div>
        </>
      ) : null}
    </div>
  )
}
