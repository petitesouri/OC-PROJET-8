import { useState } from 'react';

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
                    src={require('../assets/Arrow-left.png')} 
                    alt="arrow-left" 
                    onClick={prevSlide}>
            </img>
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
            <img className="arrow arrow-right" 
                    src={require('../assets/Arrow-right.png')} 
                    alt="arrow-right" 
                    onClick={nextSlide}>
            </img>
            <span className='indicator'>{slide+1}/{data.length}</span>            
        </article> 
    )
}
  
export default Slideshow;