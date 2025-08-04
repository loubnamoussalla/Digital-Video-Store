import React, { useContext } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../CSS/hero.css';
import { AppContext } from '../Contexts/AppContext';


export default function HeroSlider() {

  window.addEventListener('error', e => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
      e.stopImmediatePropagation();
    }
  });
  const { movies, tvshows } = useContext(AppContext);
  const items = [...movies, ...tvshows];

  const topPicks = items
    .filter(item => typeof item.pick === 'string' && item.pick.trim() !== '')
    .sort((a, b) => b.rate - a.rate);
  return (

    <section className="slideshow-section">
      <h2>Top Picks of 2021</h2>
      <div className="slide-container">
      <div className="fade-wrapper">
        <Fade style={{ height: '70vh', width: '100%' }}>
          {topPicks.map((fadeImage, index) => (
            <div className="each-slide" key={index}>
              <div className="image-container">
                <p className="paraghraph-slide">{fadeImage.title}</p>
                <img src={fadeImage.pick} alt={fadeImage.title} />
                <button className="image-button">
                  <img src={fadeImage.smallPoster} alt="Button Icon" />
                </button>

              </div>
            </div>
          ))}
        </Fade>
        </div>
      </div>
    </section>
  );
}
