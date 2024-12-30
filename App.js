import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

// Import existing components
import Header from './component/galeri'; 
import Home from './component/galeri'; 
import Gallery from './component/galeri'; 
import Footer from './component/galeri'; 
import Calendar from './component/calendar'; 
import Profile from './component/profile'; 
import Contact from './component/contact'; 

// Import new components
import HeaderSticky from './component/HeaderSticky'; 
import Slider from './component/Slider'; 
import SwiperComponent from './component/SwiperComponent'; 
import CalendarEvents from './component/CalendarEvents'; 
import ItemList from './component/Itemlist'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header with navigation links */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/component/profile">Profile</Link></li>
              <li><Link to="/component/calendar">Calendar</Link></li>
              <li><Link to="/component/contact">Contact</Link></li>
              <li><Link to="/component/galeri">Galeri</Link></li>
            </ul>
          </nav>
        </header>

        <HeaderSticky /> {/* Sticky Header */}

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<div>Beranda</div>} />
            <Route path="/component/galeri" element={<Gallery />} />
            <Route path="/component/calendar" element={<Calendar />} />
            <Route path="/component/profile" element={<Profile />} />
            <Route path="/component/contact" element={<Contact />} />
          </Routes>

          {/* Slider and Swiper Components */}
          <section className="slider-section">
            <Slider />
            <SwiperComponent />
          </section>

          {/* Item List (Optional, if needed on every page) */}
          <section className="item-list-section">
            <ItemList />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
