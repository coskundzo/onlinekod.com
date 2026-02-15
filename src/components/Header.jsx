import React, { useState, useEffect } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
      // Toz boya animasyonunu başlat
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.classList.remove('powder-animation');
      });
      setTimeout(() => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
          activeLink.classList.add('powder-animation');
          setTimeout(() => {
            activeLink.classList.remove('powder-animation');
          }, 900);
        }
      }, 10);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'courses', label: 'Kurslar' },
    { id: 'features', label: 'Özellikler' },
    { id: 'testimonials', label: 'Geri Bildirimler' },
    { id: 'contact', label: 'İletişim' }
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          handleNavClick('home');
        }}>
          <img src="/images/logo.png" alt="OnlineKod logo" className="logo-img" />
          <span className="logo-text">OnlineKod</span>
        </a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;