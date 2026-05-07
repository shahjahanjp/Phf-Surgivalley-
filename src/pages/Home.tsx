import Navigation from '../components/Navigation'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import About from '../sections/About'
import Products from '../sections/Products'
import Quality from '../sections/Quality'
import Testimonials from '../sections/Testimonials'
import CTASection from '../sections/CTASection'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Products />
        <Quality />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
    </>
  )
}
