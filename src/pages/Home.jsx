import React from 'react'
import Navigation from '../components/navigation'
import Hero from '../homePageSections/Hero'
import WhyChooseUs from '../homePageSections/WhyChooseUs'
import Services from '../homePageSections/Services'
import TheStandard from '../homePageSections/TheStandard'
import GlobalReach from '../homePageSections/GlobalReach'
import Testimonials from '../homePageSections/Testimonials'
import GetInTouch from '../homePageSections/GetInTouch'
import LatestInsights from '../homePageSections/LatestInsights'
import Footer from '../homePageSections/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Hero />
      <WhyChooseUs />
      <Services />
      
      <div className='bg-gradient-to-br from-white via-[#009969]/30 to-white'>
      <TheStandard />
      <GlobalReach />
      <Testimonials />
      <GetInTouch />
      <LatestInsights />
      </div>

      <div className='bg-[#034833]'>
        <Footer />

      </div>
    </div>
  )
}

export default Home
