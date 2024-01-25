import React from 'react'
import MainCrosel from '../../components/HomeCarousel/MainCrosel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCrosel />

        <div>
          <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage