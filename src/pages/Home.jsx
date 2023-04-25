import React from 'react'
import Bestseller from '../components/Bestseller'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'

function Home() {
  return (
    <>
      <Hero1 />
      <Bestseller />
      <Hero2 />
      <Features />
      <FeaturedProducts/>
      </>
  )
}

export default Home