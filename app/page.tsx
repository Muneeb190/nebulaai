'use client'
import React from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Partners from './components/Partners'
import HowItWorks from './components/How_it_works'
import FAQ1 from './components/faq1'


const Page = () => {
  return (

    <div className='w-full relative flex items-center justify-center flex-col px-2.5 md:px-0 py-4 '>
      <Hero />
      <Partners/>
      <Pricing/>
      <HowItWorks/>
      <FAQ1/>
    </div>
  )
}

export default Page