import React from "react";
import '../style.css' // Make sure this CSS file is present in your 'src' folder or adjust the path if necessary

const Profile = () => {
  return (
    <div>
      {/* Header Section */}
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

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-text">
          <h1>PROFIL KEPENGURUSAN GAME DEVELOPMENT CLUB</h1>
          <p><b>🕹️ Selamat datang di halaman profil kepengurusan Game Development Club!
            Kami adalah komunitas kreatif yang didedikasikan untuk mengembangkan dan mengeksplorasi
            dunia pembuatan game. Tim kami terdiri dari individu yang memiliki passion tinggi dalam
            menciptakan pengalaman interaktif yang menginspirasi.</b>
          </p>
        </div>
      </section>

      {/* Hierarchy Section */}
      <section className="hierarchy-section">
        <div className="hierarchy-header">
          <h2>BPI (BADAN PENGURUS INTI)</h2>
        </div>
        <div className="hierarchy-container">
          {/* Ketua */}
          <div className="hierarchy-row">
            <div className="hierarchy-item">
              <div className="hierarchy-content">
                <img src="assets/credo.png" alt="Ketua" className="hierarchy-image" />
                <h4>Ketua</h4>
                <p>Credo Akwila Mappadang</p>
              </div>
            </div>
          </div>

          {/* Other Positions */}
          <div className="hierarchy-row">
            <div className="hierarchy-connector"></div>
            <div className="hierarchy-item">
              <div className="hierarchy-content">
                <img src="assets/daffi.png" alt="Wakil Pengajar" className="hierarchy-image" />
                <h4>Wakil Pengajar</h4>
                <p>Daffi Bintang</p>
              </div>
            </div>
            <div className="hierarchy-item">
              <div className="hierarchy-content">
                <img src="assets/gilbert.png" alt="Wakil Acara" className="hierarchy-image" />
                <h4>Wakil Acara</h4>
                <p>Gilbert Parluhutan</p>
              </div>
            </div>
            <div className="hierarchy-item">
              <div className="hierarchy-content">
                <img src="assets/rio.png" alt="Bendahara" className="hierarchy-image" />
                <h4>Bendahara</h4>
                <p>Rio Joan Rinaldo</p>
              </div>
            </div>
            <div className="hierarchy-item">
              <div className="hierarchy-content">
                <img src="assets/brightly.png" alt="Sekretaris" className="hierarchy-image" />
                <h4>Sekretaris</h4>
                <p>Brightly Virya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section id="information" className="Sejarah">
        <div className="Sejarah-img">
          <img src="assets/sigma.png" alt="Fun fact" />
        </div>
        <div className="Sejarah-text">
          <h5>GAME DEVELOPMENT CLUB</h5>
          <h2>Fun Fact</h2>
          <p>Banyak game klasik seperti Super Mario Bros. memiliki "spaghetti code"
            atau kode yang sulit dimengerti karena keterbatasan perangkat keras.
            Meski begitu, game tersebut tetap berfungsi dengan baik.
          </p>
        </div>
      </section>

      {/* Footer Section */}
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
          {/* Social Media Links */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/gdcumn?igsh=YmNpYTh4NDFhNzgx" target="_blank" aria-label="Instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" aria-label="GitHub">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Game Development &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Profile;