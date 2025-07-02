import React, { useContext } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../CSS/hero.css';
import { AppContext } from '../Contexts/AppContext';


export default function HeroSlider() {

  const { movies, tvshows } = useContext(AppContext);
  const items = [...movies, ...tvshows];

  const topPicks = items
    .filter(item => typeof item.pick === 'string' && item.pick.trim() !== '')
    .sort((a, b) => b.rate - a.rate);
  return (

    <section className="slideshow-section">
      <h2>Top Picks of 2021</h2>
      <div className="slide-container">
        <Fade>
          {topPicks.map((fadeImage, index) => (
            <div className="each-slide" key={index}>
              <div className="image-container">
                <p className="paraghraph-slide">{fadeImage.title}</p>
                <img src={fadeImage.pick} alt={fadeImage.title} />
                <button className="image-button">
                  <img src={fadeImage.image} alt="Button Icon" />
                </button>

              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}
