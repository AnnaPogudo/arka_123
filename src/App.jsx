import { Loader } from './components/Brand.jsx'
import { useScrollReveal } from './components/Reveal.jsx'
import { ContactSection } from './sections/ContactSection.jsx'
import { GallerySection } from './sections/GallerySection.jsx'
import { HeroSection } from './sections/HeroSection.jsx'
import { IntroSection } from './sections/IntroSection.jsx'
import { PricingSection } from './sections/PricingSection.jsx'
import { ScrollStory } from './sections/ScrollStory.jsx'
import { ServicesSection } from './sections/ServicesSection.jsx'
import { SiteFooter } from './sections/SiteFooter.jsx'
import { SiteHeader } from './sections/SiteHeader.jsx'
import { SpaceSection } from './sections/SpaceSection.jsx'
import './App.css'

export default function App() {
  useScrollReveal()
  return (
    <>
      <Loader />
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <IntroSection />
        <SpaceSection />
        <ScrollStory />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
