# OnlineKod - Çocuklar İçin Kodlama Eğitim Platformu

OnlineKod, 6-17 yaş arası çocuklara yönelik kodlama, matematik ve İngilizce eğitimleri sunan modern bir landing page projesidir.

## 🚀 Özellikler

- **Kodlama Kursları**: Python, Minecraft Modlama, Scratch, Roblox Studio, JavaScript
- **Akademik Dersler**: Matematik, İngilizce
- **Modern Tasarım**: Responsive ve mobil uyumlu
- **İletişim Formu**: Formspree entegrasyonu
- **Slider Sistemi**: Otomatik geçişli hero bölümü
- **Animasyonlar**: Akıcı geçişler ve hover efektleri

## 🛠️ Teknolojiler

- **React 18** - Kullanıcı arayüzü kütüphanesi
- **Vite** - Hıli geliştirme aracı
- **CSS3** - Modern stil ve animasyonlar
- **Formspree** - Form verileri yönetimi

## 📦 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/coskundzo/onlinekod.com.git

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Projeyi build edin
npm run build

# Production sunucusunu başlatın
npm run preview
```

## 📁 Proje Yapısı

```
onlinekod/
├── public/
│   └── images/          # Görseller
├── src/
│   ├── components/      # React bileşenleri
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Courses.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/          # Yardımcı fonksiyonlar
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Özelleştirme

### Renk Tema Değiştirme
`src/index.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Kurs Ekleme/Çıkarma
`src/components/Courses.jsx` dosyasındaki `courses` dizisini düzenleyin.

### Form Entegrasyonu
İletişim formu için Formspree kullanılmaktadır. Kendi form ID'nizi eklemek için `src/components/Contact.jsx` dosyasındaki form action URL'ini değiştirin.

## 📝 Lisans

Tüm hakları saklıdır © 2026 OnlineKod

## 🤝 İletişim

- Website: onlinekod.com
- Email: info@onlinekod.com
