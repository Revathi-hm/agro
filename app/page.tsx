import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Marquee       from '@/components/Marquee'
import About         from '@/components/About'
import Stats         from '@/components/Stats'
import Products      from '@/components/Products'
import Process       from '@/components/Process'
import WhyUs         from '@/components/WhyUs'
import Certifications from '@/components/Certifications'
import Testimonials  from '@/components/Testimonials'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Products />
      <Process />
      <WhyUs />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
