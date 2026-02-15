import React from 'react';
import { coursePlaceholders } from '../utils/imagePlaceholders';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Python Programlama",
      age: "10-17 Yaş",
      description: "Temelden ileri seviyeye Python öğrenin. Oyun geliştirme, veri analizi ve yapay zeka projeleriyle kodlama becerilerinizi geliştirin.",
      icon: "🐍",
      studentImage: coursePlaceholders.python
    },
    {
      id: 2,
      title: "Minecraft Modlama",
      age: "8-15 Yaş",
      description: "Minecraft dünyasında kendi modlarınızı ve eklentilerinizi oluşturun. Java programlama dilini eğlenceli bir şekilde öğrenin.",
      icon: "🎮",
      studentImage: coursePlaceholders.minecraft
    },
    {
      id: 3,
      title: "Scratch Görsel Programlama",
      age: "6-12 Yaş",
      description: "Bloklarla kodlama öğrenerek yaratıcı projeler geliştirin. Oyunlar, animasyonlar ve interaktif hikayeler oluşturun.",
      icon: "🎨",
      studentImage: coursePlaceholders.scratch
    },
    {
      id: 4,
      title: "Roblox Studio",
      age: "9-16 Yaş",
      description: "Kendi Roblox oyunlarınızı tasarlayın ve yayınlayın. Lua programlama dilini kullanarak 3D oyun geliştirme öğrenin.",
      icon: "🏗️",
      studentImage: coursePlaceholders.roblox
    },
    {
      id: 5,
      title: "JavaScript Web Geliştirme",
      age: "12-17 Yaş",
      description: "Web siteleri ve uygulamalar geliştirerek frontend programlamayı öğrenin. HTML, CSS ve JavaScript ile başlayın.",
      icon: "🌐",
      studentImage: coursePlaceholders.javascript
    },
    {
      id: 6,
      title: "Matematik",
      age: "6-17 Yaş",
      description: "Zevkli matematik dersleriyle sayısal düşünme becerilerinizi geliştirin. Oyunlaştırma yöntemiyle matematiği sevdirelim.",
      icon: "🧮",
      studentImage: coursePlaceholders.math
    },
    {
      id: 7,
      title: "İngilizce",
      age: "6-17 Yaş",
      description: "Etkileşimli ve eğlenceli İngilizce dersleriyle dil becerilerinizi geliştirin. Kodlama terminolojisiyle birlikte öğrenin.",
      icon: "🇬🇧",
      studentImage: coursePlaceholders.english
    }
  ];

  const handleGetInfo = (courseTitle) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Optional: Show a message about which course they're interested in
      setTimeout(() => {
        const messages = [
          `🎉 ${courseTitle} kursu hakkında bilgi almak için formu doldurun!`,
          `✨ ${courseTitle} için kaydolmak ister misiniz? Formu doldurun!`,
          `🚀 ${courseTitle} ile ilgileniyorsunuz! Formu doldurun, size ulaşalım!`
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
      }, 800);
    }
  };

  return (
    <section className="courses" id="courses">
      <h2 className="section-title">Kurslarımız</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div 
            key={course.id} 
            className="course-card"
            style={{ '--card-index': index }}
          >
            <div className="course-header">
              <div className="course-icon">{course.icon}</div>
              <img 
                src={course.studentImage}
                alt={`${course.title} student`}
                className="course-student-image"
              />
            </div>
            <h3 className="course-title">{course.title}</h3>
            <span className="course-age">{course.age}</span>
            <p className="course-description">{course.description}</p>
            <button 
              className="course-button"
              onClick={() => handleGetInfo(course.title)}
            >
              Bilgi Al
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;