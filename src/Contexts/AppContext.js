import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVShows] = useState([]);
  // http://localhost:5000/movies
  // http://localhost:5000/tvshows


  useEffect(() => {
    fetch('https://your-glitch-project-name.glitch.me/movies')
      .then(res => res.json())
      .then(data => setMovies(data));

    fetch('https://your-glitch-project-name.glitch.me/tvshows')
      .then(res => res.json())
      .then(data => setTVShows(data));
  }, []);

  return (
    <AppContext.Provider value={{ movies, tvshows }}>
      {children}
    </AppContext.Provider>
  );
}
