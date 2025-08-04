import React, {  useState,useEffect } from 'react';
import MovieCard from './movieCard';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/features.css';
import { getFeatured } from '../API/media';

export default function FeaturedMovies() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  useEffect(() => {
    getFeatured("movie").then(res => {
      setFeaturedMovies(res.body); 
    });
  }, []);


  return (
    <section className="feature-container">
      <div className="spacing-div"></div>
      <h2 className="feature-title">Featured Movies</h2>
      <div className="cards-wrapper">
        {featuredMovies.map(item => (
          <div className="feature-card" key={`${item.id}`}>
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
