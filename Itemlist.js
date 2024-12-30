// ItemList.js
import React, { useRef } from 'react';
import '../style.css';

const items = [
  {
    image: '/assets/pertmingberanda.JPG',
    title: 'Pertemuan Mingguan',
    description: 'Setiap Hari Rabu Jam 18:00 - 20:00/21:00',
    link: 'galeri.html',
  },
  {
    image: '/assets/g2xberanda.JPG',
    title: 'G2X',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    link: 'galeri.html',
  },
  {
    image: '/assets/ggjberanda.png',
    title: 'GGJ',
    description: 'Global Game Jam 2024',
    date: '26 -28 January 2024',
    link: 'galeri.html',
  },
  {
    image: '/assets/fotopanit.JPG',
    title: 'Idea Jam',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    link: 'galeri.html',
  },
  {
    image: '/assets/g2xberanda.JPG',
    title: 'Kegiatan 5',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    link: 'galeri.html',
  },
];

function ItemList() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === 'prev') {
      current.scrollBy({ left: -320, behavior: 'smooth' }); // Adjust scroll value as needed
    } else {
      current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="explore">
      <div className="slide" ref={sliderRef}>
        {items.map((item, index) => (
          <div
            className="item"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content" aria-label={item.title}>
              <div className="name">{item.title}</div>
              <div className="des">{item.description}</div>
              {item.date && <div className="des">{item.date}</div>}
              <a href={item.link}>
                <button className="itembtn">See More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" aria-label="Previous" onClick={() => scroll('prev')}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" aria-label="Next" onClick={() => scroll('next')}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

export default ItemList;
