import React from 'react';
import '../CSS/content.css';
import img1 from '../content/loki.jpg';
import img2 from '../content/boys.jpg';
import img3 from '../content/margot.jpg';
import img4 from '../content/squid.jpg';


export default function ContentSection() {
  return (
    <section className="content-section" >

      <div className="content-container">
        <p>ACTOR'S SPOTLIGHT</p>
        <div className="images-container">
          <img src={img1} alt="Hollywood" />
          <img src={img2} alt="Hollywood" />
          <img src={img3} alt="Hollywood" />
          <img src={img4} alt="Hollywood" />
        </div>
      </div>
    </section>
  );
}
