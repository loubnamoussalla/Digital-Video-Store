import { React, useContext, useEffect, useState } from 'react';
import MovieCard from './movieCard';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/list.css';
import { useNavigate } from 'react-router-dom';
import { searchMediaByTitle } from '../API/media';


export default function ListingGrid() {
  const navigate = useNavigate();

  const { movies, tvshows } = useContext(AppContext);
  const items = [...movies, ...tvshows];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems([...movies, ...tvshows]);
    } else {
       searchMediaByTitle(searchTerm).then(res => {
        if(res.message === " No media for title ")
          setFilteredItems('');
        else
        setFilteredItems(res.body);
      });
      
      // items.filter(item =>
      //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
      // );
     
    }
  }, [searchTerm, movies, tvshows]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

   return (
    <section className="grid-container">
      <h1 className="grid-title">All Movies & TV Shows</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid-wrapper">

        {filteredItems.length > 0 ? (
          filteredItems.map(item => {
            const type = item.type ? 'movies' : 'tvshows';
            return (
              <div
                onClick={() => navigate(`/details/${type}/${item.id}`)}
                className="grid-card"
                key={item.id}
              >
                <MovieCard key={`${item.id}-${type}`} item={item} type={type} />
              </div>
              
            );
          })

        ) : (
          <p className="no-result">No results found.</p>
        )}
      </div>
    </section>
  );

}
