import React, {  useState,useEffect } from 'react';
import { AppContext } from '../Contexts/AppContext';
import MovieCard from './movieCard';
import { getFeatured } from '../API/media';
import '../CSS/features.css';

export default function FeaturedTVShows() {
  const [featuredTvshows, setFeaturedTvshows] = useState([]);
  useEffect(() => {
    getFeatured("tvshow").then(res => {
      setFeaturedTvshows(res.body); 
    });
  }, []);

  return (
    <section className="feature-container">
      <h2 className="feature-title">Featured TV shows</h2>
      <div className="cards-wrapper">
        {featuredTvshows.map(item => (
          <div className="feature-card" key={`${item.id}`}>
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
