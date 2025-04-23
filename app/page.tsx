'use client'
import React from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Partners from './components/Partners'
import HowItWorks from './components/How_it_works'
// import Roadmap from './components/Roadmap'
// import Faqs from './components/Faq'
import FAQ1 from './components/faq1'
import { GridPatternSpotlight } from './components/test'


const Page = () => {
  return (

    <div className='w-full relative flex items-center justify-center flex-col px-2.5 md:px-0 py-4 '>
      <Hero />
      <Partners/>
      <Pricing/>
      <HowItWorks/>
      {/* <Roadmap/>   */}
      {/* <Faqs/> */}
      <FAQ1/>
      <GridPatternSpotlight/>
    </div>
  )
}

export default Page