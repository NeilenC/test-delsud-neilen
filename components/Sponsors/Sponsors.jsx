'use client'

import React from 'react'
import SectionTitle from '../../commons/section-title/SectionTitle'
import CarouselSponsors from '../../commons/carousel-sponsors/CarouselSponsors.jsx'

const Sponsors = () => {
  return (
    <div className='sponsors-container'>
      <SectionTitle title={'Sponsors del proyecto'} wordIndex={1}/>
      <CarouselSponsors/>
    </div>
  )
}

export default Sponsors
