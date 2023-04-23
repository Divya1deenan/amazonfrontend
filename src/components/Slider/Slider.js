import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import discount from "../image/discount.JPG"
import "./Slider.css"

const Slider = ({ slides }) => {
    const timerRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const silders = {

        height: "100%",
        position: "relative",
        marginTop: "40px",
        backgroundColor:"gray"

    };
    const sliderSlides = {


        width: "100%",
        height: "100%",
        // borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const goToPrevious = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)


    }
    const goToNext = useCallback(() => {

        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }, [currentIndex, slides])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        if (timerRef.current) {

            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext();

        }, 3000)

        return () => clearTimeout(timerRef.current)
    }, [goToNext])

    return (
        <div style={silders}>
            <div className='left-arrow' onClick={goToPrevious}><i class="fa-solid fa-caret-left"></i></div>
            <div className='right-arrow' onClick={goToNext}><i class="fa-solid fa-caret-right"></i></div>
            <div style={sliderSlides}></div>
            <div className='dot-desing'>
                {slides.map((slide, slideIndex) => (

                    <div key={slideIndex}  onClick={() => goToSlide(slideIndex)}>
                        
                    </div>

                ))}
            </div>
           <div>

            <img src={discount} alt="dis" className='discount'/>
            </div>
        </div>
    )
}

export default Slider