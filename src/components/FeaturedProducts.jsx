import React, { useRef } from 'react'
import HCard from './HCard'
import pic1 from '/Images/3_Corousel.png'
import pic2 from '/Images/H-squared.svg'
import pic3 from '/Images/Netatmo_rain.svg'


const FeaturedProducts = () => {
  const slidesContainer = useRef();
  const slide = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  const handleNext = () => {
    const slideWidth = slide.current.clientWidth;
    slidesContainer.current.scrollLeft += slideWidth;
  }
  const handlePrev = () => {
    const slideWidth = slide.current.clientWidth;
    slidesContainer.current.scrollLeft -= slideWidth;
  }

  return (
    <div className="best-seller-cont">
      <span>FEATURED PRODUCTS</span>
      <div className="feat-pro">
        <section className="slider-wrapper">
          <button className="slide-arrow" ref={prevButton} id='slide-arrow-prev' onClick={handlePrev}>
            &#8249;
          </button>
          <ul className="slides-container" ref={slidesContainer}>
            <li className="slide" ref={slide}><HCard pic={pic1} title='Apple Macbook Pro' /><HCard pic={pic2} title='H-Squared Television Tray' /><HCard pic={pic3} title='Netatmo Rain Gauge' /></li>
            <li className="slide" ref={slide}><HCard pic={pic1} title='Apple Macbook Pro' /><HCard pic={pic2} title='H-Squared Television Tray' /><HCard pic={pic3} title='Netatmo Rain Gauge' /></li>
            <li className="slide" ref={slide}><HCard pic={pic1} title='Apple Macbook Pro' /><HCard pic={pic2} title='H-Squared Television Tray' /><HCard pic={pic3} title='Netatmo Rain Gauge' /></li>
          </ul>
          <button className="slide-arrow" ref={nextButton} id='slide-arrow-next' onClick={handleNext}>
            &#8250;
          </button>
        </section>
      </div>
    </div>
  )
}

export default FeaturedProducts