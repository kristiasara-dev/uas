import React, { useEffect, useState } from 'react';
import '../style.css';

const contact = () => {
  const [currentTime, setCurrentTime] = useState({ hari: '', tanggal: '', waktu: '' });
  const [countdown, setCountdown] = useState('Memuat...');

  const validateForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
      alert('Nama hanya bisa di isi oleh huruf.');
      return false;
    }

    if (!email) {
      alert('Email is required and must be in a valid format.');
      return false;
    }

    alert('Form submitted successfully!');
    return true;
  };

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

      <section id="home" className="home">
        <div className="home-text">
          <h1>CONTACT GAME DEVELOPMENT CLUB</h1>
          <p>
            🕹️ Mau mencoba terjun ke dunia game development? Yuk, bergabung dengan
            Game Development Club (GDC). GDC bergerak dalam memberikan pembelajaran
            dan aktivitas game development untuk mahasiswa UMN. Pengalaman di GDC
            tentunya akan membekalimu sebelum masuk ke dunia pengembangan game yang
            sesungguhnya!
          </p>
        </div>
      </section>

      <section id="contact-section">
        <h2 className="section-title">CONNECT WITH US</h2>
        <div className="contact-container">
          <div id="google-maps">
            <h3 className="sub-title">OUR LOCATION</h3>
            <div id="map"></div>
            <p className="address">
              Universitas Multimedia Nusantara <br />Jalan Boulevard, Gading Serpong,
              Tangerang, Banten, Indonesia
            </p>
          </div>

          <div id="custom-social-media">
            <h3 className="sub-title">OUR SOCIAL MEDIA</h3>
            <div className="custom-social-icons">
              <a href="https://www.instagram.com/gdcumn?igsh=YmNpYTh4NDFhNzgx" target="_blank" rel="noreferrer" className="custom-social-link">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://gmail.com" target="_blank" rel="noreferrer" className="custom-social-link">
                <i className="bx bxl-gmail"></i>
              </a>
              <a href="https://line.com" target="_blank" rel="noreferrer" className="custom-social-link">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="custom-social-link">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="custom-social-link">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form">
        <h1 className="section-title">CONTACT US</h1>
        <form onSubmit={validateForm}>
          <input 
            name="name" 
            type="text" 
            className="feedback-input" 
            placeholder="Name" 
          />   
          <input 
            name="email" 
            type="email" 
            className="feedback-input" 
            placeholder="Email" 
          />
          <textarea 
            name="text" 
            className="feedback-input" 
            placeholder="Comment">
          </textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logos">
            <img src="assets/logo.png" alt="GCC Logo" />
            <div className="divider"></div>
            <img src="assets/umnlogo.png" alt="UMN Logo" />
          </div>

          <div className="footer-content">
            <h3>Game Development Club<br />Universitas Multimedia Nusantara</h3>
            <p>
              Jl. Boulevard, Gading Serpong, kel. Curug Sangereng,
              Kec. Kelapa Dua, Kab. Tangerang, Prop. Banten, Indonesia
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://gmail.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-gmail"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Game Development &copy; 2024</p>
        </div>
      </footer>

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

export default contact;
