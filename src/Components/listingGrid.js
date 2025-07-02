import { React, useContext } from 'react';
import MovieCard from './movieCard';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/list.css';
import { useNavigate } from 'react-router-dom';


export default function ListingGrid() {
  const navigate = useNavigate();

  const { movies, tvshows } = useContext(AppContext);
  const items = [...movies, ...tvshows];
  return (
    <section className="grid-container">
      <h1 className="grid-title">All Movies & TV Shows</h1>
      <div className="grid-wrapper">
        {items.map(item => {

          // Determine type 
          const type = item.runTime ? 'movies' : 'tvshows';
          return (
            <div onClick={() => navigate(`/details/${type}/${item.id}`)} className="grid-card" key={item.id}>
              <MovieCard key={`${item.id}-${type}`} item={item} type={type} />
            </div>
          );
        })}

      </div>
    </section>
  );
}
