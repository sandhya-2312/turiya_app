import PageLayout from '../components/layout/PageLayout'
import BigDataHero from '../components/BigDataHero'
import WhatWeDoSection from '../components/WhatWeDoSection'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import FunFactsSection from '../components/FunFactsSection'
import IndustriesSection from '../components/IndustriesSection'
import FreeTrialSection from '../components/FreeTrialSection'

const USE_STRAPI_PHOTO_HERO = true

export default function HomePage() {
  return (
    <PageLayout>
      <BigDataHero photoHero={USE_STRAPI_PHOTO_HERO} />
      <WhatWeDoSection />
      <AboutSection />
      <Services />
      <FunFactsSection />
      <IndustriesSection />
      <FreeTrialSection />
    </PageLayout>
  )
}
