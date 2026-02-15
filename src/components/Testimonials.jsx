import React from 'react';
import { studentPlaceholders } from '../utils/imagePlaceholders';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Çocuğum Scratch kursuna başladıktan sonra kodlamaya olan ilgisi çok arttı. Artık kendi küçük oyunlarını yapıyor!",
      author: "Ayşe Kaya",
      role: "Anne",
      studentImage: studentPlaceholders.student1,
      parentImage: studentPlaceholders.parent1
    },
    {
      id: 2,
      text: "Python dersleri gerçekten çok kaliteli. Eğitmenler sabırlı ve bilgili. Oğlum her hafta yeni şeyler öğreniyor.",
      author: "Mehmet Demir",
      role: "Baba",
      studentImage: studentPlaceholders.student2,
      parentImage: studentPlaceholders.parent2
    },
    {
      id: 3,
      text: "Minecraft modlama kursu harika olmuş. Çocuğum hem eğlendi hem de programlama mantığını öğrendi. Kesinlikle tavsiye ederim!",
      author: "Elif Şahin",
      role: "Anne",
      studentImage: studentPlaceholders.student3,
      parentImage: studentPlaceholders.parent3
    },
    {
      id: 4,
      text: "İngilizce dersleriyle kodlama terminolojisini birlikte öğrenmek çok etkili olmuş. Çocuğum şimdi teknik İngilizcesi çok iyi!",
      author: "Ahmet Yılmaz",
      role: "Baba",
      studentImage: studentPlaceholders.student4,
      parentImage: studentPlaceholders.parent4
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">Veli Geri Bildirimleri 💬</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className="testimonial-card"
            style={{ '--card-index': index }}
          >
            <div className="testimonial-images">
              <img 
                src={testimonial.studentImage} 
                alt="Student" 
                className="student-image"
              />
              <img 
                src={testimonial.parentImage} 
                alt="Parent" 
                className="parent-image"
              />
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;