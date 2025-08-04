import React, { createContext, useEffect, useState } from 'react';
import { registerUser,loginUser } from '../API/users';
import { getAllMovies, getAllTVShows } from '../API/media';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVShows] = useState([]);


  useEffect(() => {
    getAllMovies().then(data => setMovies(data.body)); 
  }, []);
  useEffect(() => {
    getAllTVShows().then(data => setTVShows(data.body)); 
  }, []);


  return (
    <AppContext.Provider value={{ movies, tvshows }}>
      {children}
    </AppContext.Provider>
  );
}
