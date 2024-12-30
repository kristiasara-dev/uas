import React, { useEffect, useState } from 'react';
import '../style.css';

const Header = () => (
  <header>
    <a href="#" className="logo">
      <img src="assets/logo.png" alt="Logo GDC" />
    </a>
    <ul className="navbar">
      <li><a href="index.html">Beranda</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a href="calendar.html">Calendar</a></li>
      <li><a href="galeri.html">Galeri</a></li>
      <li><a href="contact.html">Contact us</a></li>
    </ul>
  </header>
);

const Home = () => (
  <section id="home" className="home">
    <div className="home-text">
      <h1>GALERI GAME DEVELOPMENT CLUB</h1>
      <p>🕹️ Dari konsep sederhana hingga proyek besar, jelajahi bagaimana imajinasi diwujudkan dalam bentuk game yang menakjubkan. Setiap gambar dan video di sini bercerita tentang perjuangan, proses kreatif, dan kebanggaan kami sebagai bagian dari Game Development Club.</p>
    </div>
  </section>
);

const GalleryItem = ({ image, name, description, link }) => (
  <div className="gallery-section-item" style={{ backgroundImage: `url(${image})` }}>
    <div className="gallery-section-content">
      <div className="gallery-section-name">{name}</div>
      <div className="gallery-section-description">{description}</div>
      <a href={link} className="gallery-section-btn" target="_blank" rel="noopener noreferrer">See More</a>
    </div>
  </div>
);

const Gallery = () => (
  <section className="gallery-section">
    <div className="gallery-section-container">
      <div className="gallery-section-header">
        <h2>Akses Drive</h2>
      </div>
      <div className="gallery-section-slide">
        <GalleryItem
          image="assets/pertmingberanda.JPG"
          name="Pertemuan Mingguan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="https://drive.google.com/drive/folders/1GiqvfKaJQ0auLLboalDdD7vFxQgYQLrs?hl=ID"
        />
        <GalleryItem
          image="assets/ggjberanda.png"
          name="GGJ"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="https://drive.google.com/drive/folders/1GiqvfKaJQ0auLLboalDdD7vFxQgYQLrs?hl=ID"
        />
        <GalleryItem
          image="assets/g2xberanda.JPG"
          name="G2X"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="https://drive.google.com/drive/folders/1GiqvfKaJQ0auLLboalDdD7vFxQgYQLrs?hl=ID"
        />
        <GalleryItem
          image="assets/fotopanit.JPG"
          name="Idea Jam"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="https://drive.google.com/drive/folders/1GiqvfKaJQ0auLLboalDdD7vFxQgYQLrs?hl=ID"
        />
      </div>
    </div>
  </section>
);

const FunFact = () => (
  <section id="information" className="Sejarah">
    <div className="Sejarah-img">
      <img src="assets/skltn.png" alt="Skeleton" />
    </div>
    <div className="Sejarah-text">
      <h5>GAME DEVELOPMENT CLUB</h5>
      <h2>Fun Fact</h2>
      <p>Tahukah Anda bahwa permainan legendaris "Minecraft" awalnya dibuat hanya dalam waktu seminggu oleh Markus Persson, yang juga dikenal sebagai Notch? Notch kemudian merilis versi awal dari "Minecraft" pada 17 Mei 2009.</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logos">
        <img src="assets/logo.png" alt="GCC Logo" />
        <div className="divider"></div>
        <img src="assets/umnlogo.png" alt="UMN Logo" />
      </div>
      <div className="footer-content">
        <h3>Game Development Club<br />Universitas Multimedia Nusantara</h3>
        <p>Jl. Boulevard, Gading Serpong, kel. Curug Sangereng, Kec. Kelapa Dua, Kab. Tangerang, Prop. Banten, Indonesia</p>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.instagram.com/gdcumn?igsh=YmNpYTh4NDFhNzgx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Game Development &copy; 2024</p>
    </div>
  </footer>
);

const Galeri = () => {
  const [currentTime, setCurrentTime] = useState({ hari: '', tanggal: '', waktu: '' });
  const [countdown, setCountdown] = useState('Memuat...');

  useEffect(() => {
    // Function untuk menampilkan waktu saat ini
    function tampilkanWaktu() {
      const interval = setInterval(() => {
        const now = new Date();
        const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
        const optionsTanggal = { day: 'numeric', month: 'long', year: 'numeric' };
        const tanggal = now.toLocaleDateString('id-ID', optionsTanggal);
        const waktu = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });

        setCurrentTime({ hari, tanggal, waktu });
      }, 1000);

      // Cleanup interval saat komponen di-unmount
      return () => clearInterval(interval);
    }

    // Function untuk menghitung mundur
    function hitungMundur(targetDate) {
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace dengan API Key Anda
      const url = `https://maps.googleapis.com/maps/api/timezone/json?location=-6.2088,106.8456&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const timeZoneOffset = (data.rawOffset + data.dstOffset) * 1000;

          const interval = setInterval(() => {
            const now = new Date();
            const jakartaTime = new Date(now.getTime() + timeZoneOffset);
            const timeLeft = new Date(targetDate) - jakartaTime;

            if (timeLeft > 0) {
              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

              setCountdown(`${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`);
            } else {
              setCountdown('Waktu pendaftaran telah tiba!');
              clearInterval(interval); // Menghentikan countdown jika waktu sudah habis
            }
          }, 1000);

          // Cleanup interval saat komponen di-unmount
          return () => clearInterval(interval);
        })
        .catch((error) => {
          console.error('Error:', error);
          setCountdown('Gagal memuat countdown.');
        });
    }

    tampilkanWaktu();
    const targetDate = '2025-08-17T00:00:00'; // Ganti dengan tanggal target Anda
    hitungMundur(targetDate);
  }, []); // Kosongkan array dependency untuk hanya menjalankan sekali

  return (
    <div>
      <Header />
      <Home />
      <Gallery />
      <FunFact />
      <Footer />

      {/* Waktu dan Countdown */}
      <section id="section-jam" className="container">
        <div className="container-jam">
          <p id="tanggal-jam">Hari {currentTime.hari}<br />Tanggal: {currentTime.tanggal}</p>
          <p id="waktu-jam">Jam: <strong>{currentTime.waktu}</strong></p>
        </div>
      </section>

      <section id="section-countdown" className="container">
        <div className="container-countdown">
          <p id="countdown-title">Pendaftaran dalam:</p>
          <p id="countdown-timer">{countdown}</p>
        </div>
      </section>
    </div>
  );
};

export default Galeri;
