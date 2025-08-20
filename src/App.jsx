import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import WhyChooseUs from './sections/WhyChooseUs'
import About from './sections/About'
import CTA from './sections/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
