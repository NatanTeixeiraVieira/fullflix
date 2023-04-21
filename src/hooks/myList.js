import { useContext, useEffect, useState } from 'react';
import { RequestMoviesContext } from '../contexts/RequestMovies/RequestMoviesContext';

export const useSetMyList = () => {
  const [prevList, setPrevlist] = useState([]);

  useEffect(() => {
    setPrevlist(JSON.parse(localStorage.getItem('myList')) ?? []);
  }, []);

  const addMovieToMyList = (movieId) => {
    localStorage.setItem('myList', JSON.stringify([...prevList, movieId]));
    setPrevlist(JSON.parse(localStorage.getItem('myList')));
  };

  return addMovieToMyList;
};

export const useGetMyList = () => {
  const { movieListRef } = useContext(RequestMoviesContext);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const myListIds = JSON.parse(localStorage.getItem('myList'));
    movieListRef.current.forEach((item) => {
      item.items.results.forEach((movie) => {
        if (myListIds?.includes(movie.id)) {
          setMyList((prev) => [...prev, movie]);
        }
      });
    });

    return () => {
      setMyList([]);
    };
  }, [movieListRef]);

  return myList;
};
