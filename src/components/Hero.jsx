import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToCourses = () => {
    const coursesElement = document.getElementById('courses');
    if (coursesElement) {
      coursesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      image: '/images/slider1.jpg',
      title: 'Çocuklar İçin Eğlenceli Kodlama Dünyası! ✨',
      description: '6-17 yaş arası çocuklara yönelik Python 🐍, Minecraft 🎮, Scratch 🎨, Roblox 🏗️, JavaScript 🌐, Matematik 🧮 ve İngilizce 🇬🇧 dersleri',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(230, 225, 235, 0.95) 100%)'
    },
    {
      id: 2,
      image: '/images/slider2.jpg',
      title: 'Kodlama Öğrenmenin Keyfi!',
      description: 'Eğlenceli projeler ve interaktif derslerle yazılım dünyasına adım at',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)'
    },
    {
      id: 3,
      image: '/images/slider3.jpg',
      title: 'Oyun Geliştir, Hayal Et!',
      description: 'Minecraft ve Roblox ile kendi oyunlarını tasarla ve yayınla',
      gradient: 'linear-gradient(135deg, rgba(79, 172, 254, 0.9) 0%, rgba(230, 242, 243, 0.9) 100%)'
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
      {/* Slider Container */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `${slide.gradient}, url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="cta-button" onClick={scrollToCourses}>
                🎯 Kursları Keşfet
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
