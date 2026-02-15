import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // Show success message first
    e.preventDefault();
    
    const successMessages = [
      '🎉 Harika! Mesajınız başarıyla gönderildi!',
      '✨ Süper! En kısa sürede sizinle iletişime geçeceğiz!',
      '🚀 Mesajınız bize ulaştı! Heyecan verici!',
      '🌟 Teşekkürler! Çok yakında size geri dönüş yapacağız!'
    ];
    
    const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
    alert(randomMessage);
    
    // Prepare form data
    const formPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      childAge: formData.childAge,
      message: formData.message,
      submittedAt: new Date().toLocaleString('tr-TR')
    };
    
    // Submit form programmatically after showing success message
    setTimeout(() => {
      // Submit to Formspree
      const formDataObj = new FormData();
      Object.keys(formPayload).forEach(key => {
        formDataObj.append(key, formPayload[key]);
      });
      
      fetch('https://formspree.io/f/mykdwbkr', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            childAge: '',
            message: ''
          });
        }
      }).catch(error => {
        console.error('Form submission error:', error);
      });
      
      // Also send to Google Sheets via SheetDB (FREE service)
      // Replace with your SheetDB endpoint
      fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPayload)
      }).catch(err => {
        console.log('SheetDB error (optional):', err);
      });
      
    }, 500);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>📬 Bize Ulaşın</h2>
        <p>Kurslarımız hakkında detaylı bilgi almak veya kayıt olmak için bizimle iletişime geçin! 🎯</p>
        
        <form 
          className="contact-form" 
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mykdwbkr"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad *"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="E-posta *"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Telefon Numarası"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
          
          <select
            name="childAge"
            className="form-input"
            value={formData.childAge}
            onChange={handleChange}
            required
          >
            <option value="">Çocuğunuzun Yaşı *</option>
            <option value="6-8">6-8 Yaş</option>
            <option value="9-12">9-12 Yaş</option>
            <option value="13-15">13-15 Yaş</option>
            <option value="16-17">16-17 Yaş</option>
          </select>
          
          <textarea
            name="message"
            placeholder="Eklemek istediğiniz notlar..."
            className="form-input form-textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <button type="submit" className="submit-button">
            Mesaj Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;