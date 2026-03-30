import { publicImg } from '../utils/publicUrl'

export default function FreeTrialSection() {
  return (
    <section className="free-trial-area free-trial-split" aria-labelledby="free-trial-heading">
      <div className="free-trial-split__inner">
        <div className="free-trial-split__photo">
          <img
            src={publicImg('free-trial-promo.png')}
            alt="Person using a laptop comfortably at home"
          />
        </div>
        <div className="free-trial-split__panel">
          <div className="free-trial-split__body">
            <h2 id="free-trial-heading">Start your free trial</h2>
            <form
              className="free-trial-split__form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your business email here"
                aria-label="Business email"
              />
              <button type="submit">Sign Up Free</button>
            </form>
            <p className="free-trial-split__note">
              Test out the Big Data Analytics features for 14 days, no credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
