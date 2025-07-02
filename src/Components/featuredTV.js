import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import MovieCard from './movieCard';

export default function FeaturedTVShows() {
  const { tvshows } = useContext(AppContext);
  const items = [...tvshows];

  return (
    <section className="feature-container">
      <h2 className="feature-title">Featured TV shows</h2>
      <div className="cards-wrapper">
        {items.map(item => (
          <div className="feature-card" key={`${item.id}`}>
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
