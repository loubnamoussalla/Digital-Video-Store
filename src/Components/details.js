import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/details.css';

export default function Details() {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const { movies, tvshows } = useContext(AppContext);

  useEffect(() => {
    // Find the item from the appropriate array based on type
    const items = type === 'movies' ? movies : tvshows;
    const foundItem = items.find(item => item.id === parseInt(id));
    setItem(foundItem);
  }, [type, id, movies, tvshows]);
  if (!item) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-info">
          <h1 className="title">{item.title} {item.year}</h1>
          <img src={item.image} alt={item.title} className="details-image"></img>
          <div className="metadata">
            {/* <span className="year">{item.year}</span> */}
            <span className="rating">Rating: {item.rate}/10</span>
            <span className="runtime">{item.runTime || `${item.seasons} Seasons`}</span>
          </div>
          <p className="genre">{item.genre}</p>
          <p className="description">{item.description || 'No synopsis available.'}</p>
          <div className="pricing">
            <div className="price-box">
              <p className="price-label">Rent</p>
              <p className="price">${item.rentPrice || '2.99'}</p>
            </div>
            <div className="price-box">
              <p className="price-label">Buy</p>
              <p className="price">${item.buyPrice || '9.99'}</p>
            </div>
          </div>
        </div>
        <div className="poster-container">
          <img src={item.poster} alt={item.title} className="poster" />
        </div>
      </div>
    </div>
  );
}
