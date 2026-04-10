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
          <span className="logo-text"></span>
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Bursluluk Sınavı düğmesi - BAŞA ALINDI */}
          <li>
            <a
              href="https://onlinekod-sinav-app.onrender.com/"
              className="nav-link bursluluk-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                color: '#fff',
                borderRadius: '8px',
                padding: '10px 20px',
                marginRight: '16px',
                fontWeight: 'bold',
                fontSize: '1.05rem',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 16px rgba(221,36,118,0.18)',
                border: '2px solid #fff',
                textShadow: '0 2px 8px rgba(0,0,0,0.10)'
              }}
            >
              🎉 Bursluluk Sınavı
            </a>
          </li>
          {navItems.map((item) => (
            <li key={item.id}>
              {item.id === 'contact' ? (
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ) : (
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
              )}
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