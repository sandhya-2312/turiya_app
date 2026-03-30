import Navbar from '../components/Navbar'
import BigDataHero from '../components/BigDataHero'
import WhatWeDoSection from '../components/WhatWeDoSection'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import TeamSection from '../components/TeamSection'
import FunFactsSection from '../components/FunFactsSection'
import IndustriesSection from '../components/IndustriesSection'
import BlogSection from '../components/BlogSection'
import FreeTrialSection from '../components/FreeTrialSection'
import Footer from '../components/Footer'

/** `false` = theme ML banner background + shapes. `true` = photo hero (`hero-bigdata.png`). */
const USE_STRAPI_PHOTO_HERO = true

export default function BigDataAnalytics() {
  return (
    <div>
      <Navbar />
      <BigDataHero photoHero={USE_STRAPI_PHOTO_HERO} />
      <WhatWeDoSection />
      <AboutSection />
      <Services />
      <TeamSection />
      <FunFactsSection />
      <IndustriesSection />
      <BlogSection />
      <FreeTrialSection />
      <Footer />
    </div>
  )
}
