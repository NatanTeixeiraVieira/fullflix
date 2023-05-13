import { createContext, useEffect, useMemo, useRef, useState } from 'react';

import Tmdb from '../../services/Tmdb';

export const RequestMoviesContext = createContext();

export function RequestMoviesContextProvider({ children }) {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const movieListRef = useRef([]);

  useEffect(() => {
    const loadAll = async () => {
      const movies = await Tmdb.getHomeList();
      movieListRef.current = movies;

      const getOriginalsMovies = movies.find(
        (listMovies) => listMovies.slug === 'originals'
      );
      const randomNumber = Math.floor(
        Math.random() * getOriginalsMovies.items.results.length - 1
      );
      const chosenMovie = getOriginalsMovies.items.results[randomNumber];
      const chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id);
      setFeaturedMovie(chosenMovieInfo);
    };
    loadAll();
  }, []);

  const value = useMemo(
    () => ({ featuredMovie, movieListRef }),
    [featuredMovie]
  );

  return (
    <RequestMoviesContext.Provider value={value}>
      {children}
    </RequestMoviesContext.Provider>
  );
}
