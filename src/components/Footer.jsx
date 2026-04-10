import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OnlineKod</h3>
          <p>
            6-17 yaş arası çocuklara yönelik kodlama, matematik ve İngilizce eğitimleriyle 
            geleceğin yazılımcılarını yetiştiriyoruz.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">▶️</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Hızlı Linkler</h3>
          <ul className="footer-links">
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#courses">Kurslar</a></li>
            <li><a href="#features">Özellikler</a></li>
            <li><a href="#testimonials">Geri Bildirimler</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kurslar</h3>
          <ul className="footer-links">
            <li><a href="#">Python Programlama</a></li>
            <li><a href="#">Minecraft Modlama</a></li>
            <li><a href="#">Scratch Görsel Programlama</a></li>
            <li><a href="#">Roblox Studio</a></li>
            <li><a href="#">JavaScript Web Geliştirme</a></li>
            <li><a href="#">Matematik</a></li>
            <li><a href="#">İngilizce</a></li>
          </ul>
        </div>

        <div className="footer-section" id="contact">
          <h3>İletişim Bilgileri</h3>
          <ul className="footer-links">
            <li><span>📞</span> +90 (507) 668 43 99</li>
            <li><span>📧</span> onlinekodacademy@gmail.com</li>
            <li><span>📍</span> İstanbul, Türkiye</li>
            <li><span>🕒</span> Hafta içi 09:00-22:00 Online</li>
            <li><span>🕒</span> Hafta sonu 10:00-22:00 Online </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} OnlineKod. Tüm hakları saklıdır. Made with ❤️</p>
        <button 
          onClick={scrollToTop}
          className="scroll-top-btn"
        >
          ⬆️ Başa Dön
        </button>
      </div>
    </footer>
  );
};

export default Footer;