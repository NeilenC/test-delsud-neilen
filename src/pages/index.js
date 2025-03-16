'use client' 

import React from 'react'
import HomeComponent from '../../components/Home/HomeComponent'
import SectionCardsComopnent from '../../components/SectionCards/SectionCardsComopnent'
import ButtonSection from '../../components/ButtonSection/ButtonSection'

const Home = () => {
  return (
    <div>
     <HomeComponent/> 
     <SectionCardsComopnent/>
     <ButtonSection/>
    </div>
  )
}

export default Home
