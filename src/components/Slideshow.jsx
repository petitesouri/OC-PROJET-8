import { useState } from 'react';

import ArrowLeft from '../assets/Arrow-left.png'
import ArrowRight from '../assets/Arrow-right.png'

const Slideshow = ({data}) => { 
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length -1 : slide - 1)
    }

    return (
        <article className="carousel">
            <img className="arrow arrow-left" 
                    src={ ArrowLeft } 
                    alt="arrow-left" 
                    onClick={prevSlide}>
            </img>
            <div className="carousel-pictures">
                {data.map((picture, index) => {  
                    return (
                        <img key={data[index]} 
                                className={ slide === index ? "carousel-pictures" 
                                                : "carousel-pictures carousel-pictures__hidden" } 
                                src={data[index]} 
                                alt={picture}>
                        </img> 
                    )   
                })}
            </div>
            <img className="arrow arrow-right" 
                    src={ ArrowRight } 
                    alt="arrow-right" 
                    onClick={nextSlide}>
            </img>
            <span className='indicator'>{slide+1}/{data.length}</span>            
        </article> 
    )
}
  
export default Slideshow;