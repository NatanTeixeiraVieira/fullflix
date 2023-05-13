import { useContext, useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import Movie from '../../components/Movie';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import { RequestMoviesContext } from '../../contexts/RequestMovies/RequestMoviesContext';
import { SearchContext } from '../../contexts/Search/SearchContext';

import './styles.css';

export default function Search() {
  const { movieListRef } = useContext(RequestMoviesContext);
  const { search } = useContext(SearchContext);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const { modalIsOpen } = useContext(ModalContext);

  useEffect(() => {
    movieListRef.current.forEach((item) => {
      item.items.results.forEach((movie) => {
        if (
          movie?.name?.toLowerCase() === search?.toLowerCase() ||
          movie?.title?.toLowerCase() === search?.toLowerCase()
        ) {
          setMoviesSearch((prev) => [...prev, movie]);
        }
      });
    });

    return () => {
      setMoviesSearch([]);
    };
  }, [search, movieListRef]);

  return (
    <div className="search">
      <div className="movies">
        {search &&
          moviesSearch.map((movie) => (
            <Movie movie={movie} key={movie.id} search="search" />
          ))}
        {!moviesSearch.length && (
          <div className="content_not_found">
            <p>
              Nenhum conteúdo correspondente a &quot;{search}&quot; foi
              encontrado.
            </p>
          </div>
        )}
        {modalIsOpen && <Modal />}
      </div>
    </div>
  );
}
