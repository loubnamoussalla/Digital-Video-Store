import React, { useContext } from 'react';
import MovieCard from './movieCard';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/features.css';


export default function FeaturedMovies() {
  const { movies } = useContext(AppContext);
  const items = [...movies];


  return (
    <section className="feature-container">
      <div className="spacing-div"></div>
      <h2 className="feature-title">Featured Movies</h2>
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
