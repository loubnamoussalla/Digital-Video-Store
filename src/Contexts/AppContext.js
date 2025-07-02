import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(res => res.json())
      .then(data => setMovies(data));

    fetch('http://localhost:5000/tvshows')
      .then(res => res.json())
      .then(data => setTVShows(data));
  }, []);

  return (
    <AppContext.Provider value={{ movies, tvshows }}>
      {children}
    </AppContext.Provider>
  );
}
