import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Residencies.scss"

const Residencies = () => {
  return (
    <div>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span>Popular Residencies</span>
            </div>
        </div>
    </div>
  )
}

export default Residencies