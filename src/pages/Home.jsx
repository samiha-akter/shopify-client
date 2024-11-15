import React from 'react'
import Banner from '../components/home/Banner'
import FeaturedProducts from '../components/home/FeaturedProducts'

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='my-24'>
        <h className="mb-16 text-2xl font-semibold text-center">
          Featured Products
        </h>
      <FeaturedProducts/>
      </div>
    </div>
  )
}
