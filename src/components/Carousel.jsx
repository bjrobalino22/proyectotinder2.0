// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image4 from '../images/image4.jpg'; // Importa tus imágenes
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, img: image1 }, // Usa las imágenes importadas
        { id: 2, img: image2 },
        { id: 3, img: image3 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Cambia de diapositiva cada 3 segundos

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.img} alt={`Slide ${slide.id}`} />
                </div>
            ))}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
