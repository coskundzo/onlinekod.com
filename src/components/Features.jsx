import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Deneyimli Eğitmenler",
      description: "Alanında uzman eğitmenlerle canlı dersler. Her öğrenciye özel ilgi ve destek.",
      icon: "👨‍🏫"
    },
    {
      id: 2,
      title: "Etkileşimli Öğrenme",
      description: "Oyunlaştırma ve projelerle öğrenmeyi eğlenceli hale getiriyoruz. Pratik uygulamalarla pekiştirme.",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Esnek Zamanlama",
      description: "Hafta içi ve hafta sonu seansları. Çocuğunuzun uygun zamanında ders alın.",
      icon: "⏰"
    },
    {
      id: 4,
      title: "Küçük Sınıf Mevcutları",
      description: "Her sınıfta maksimum 6 öğrenci. Bireysel ilgi ve kaliteli eğitim garantisi.",
      icon: "👥"
    },
    {
      id: 5,
      title: "Proje Tabanlı Eğitim",
      description: "Gerçek dünya projeleriyle becerilerinizi geliştirin. Portföy oluşturun.",
      icon: "💼"
    },
    {
      id: 6,
      title: "İlerleme Takibi",
      description: "Aylık değerlendirme raporları ve gelişim takibi. Ebeveyn geri bildirimleri.",
      icon: "📊"
    }
  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Neden OnlineKod? 🌟</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className="feature-card"
            style={{ '--card-index': index }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;