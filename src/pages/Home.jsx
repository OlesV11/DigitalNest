import AboutMe from '@/components/AboutMe/AboutMe.jsx'
import FAQ from '@/components/FAQ/FAQ.jsx'
import HeroSection from '@/components/HeroSection/HeroSection.jsx'
import Portfolio from '@/components/Portfolio/Portfolio.jsx'
import Services from '@/components/Services/Services.jsx'
import Testimonials from '@/components/Testimonials/Testimonials.jsx'
import Works from '@/components/Works/Works.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
      <Works />
      <Portfolio />
      <Testimonials />
      <FAQ />
    </>
  )
}
