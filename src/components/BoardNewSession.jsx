import React, { useState, useEffect } from 'react';
import { IMAGES } from "./constants";

export function BoadNewSession() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % IMAGES.length);
        }, 5000);

        return () => clearInterval(interval); 
    }, [currentSlide]);

    const previusSlice = () => {
        const prevSlide = currentSlide === 0 ? IMAGES.length - 1 : currentSlide - 1;
        setCurrentSlide(prevSlide);
    }

    const nextSlice = () => {
        setCurrentSlide((currentSlide + 1) % IMAGES.length)
    }
 
    return (
        <>
            <div className="new-session">
                <img src={IMAGES[currentSlide][1]} alt={IMAGES[currentSlide][0]} id={'slide-' + currentSlide} />
                <button className='join'>Join</button>
                <div className='session'>
                    <h4>{IMAGES[currentSlide] ? IMAGES[currentSlide][0] : ''} New Season</h4>
                </div>
                
                <div className='nav-session'>
                    <button onClick={() => previusSlice()}>{'<'}</button>
                    <button onClick={() => nextSlice()}>{'>'}</button>
                </div>
            </div>
        </>
        
    );
}
