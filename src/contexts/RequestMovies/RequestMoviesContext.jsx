import { createContext, useEffect, useRef, useState } from 'react';
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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RequestMoviesContext.Provider value={{ featuredMovie, movieListRef }}>
      {children}
    </RequestMoviesContext.Provider>
  );
}
