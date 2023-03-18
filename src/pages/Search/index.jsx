import { useContext, useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import Movie from '../../components/Movie';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import { RequestMoviesContext } from '../../contexts/RequestMoviesContext/RequestMoviesContext';
import { SearchContext } from '../../contexts/Search/SearchContext';
import './styles.css';

export default function Search() {
  const { movieListRef } = useContext(RequestMoviesContext);
  const { search } = useContext(SearchContext);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const { modalIsOpen } = useContext(ModalContext);

  useEffect(() => {
    setMoviesSearch([]);
    movieListRef.current.forEach((item) => {
      item.items.results.forEach((movie) => {
        if (
          (movie?.name?.toLowerCase() === search?.toLowerCase() ||
            movie?.title?.toLowerCase() === search?.toLowerCase()) &&
          !moviesSearch.includes(movie)
        ) {
          setMoviesSearch((prev) => [...prev, movie]);
        }
      });
    });
  }, [search]);

  return (
    <div className="search">
      <div className="movies">
        {search &&
          moviesSearch.map((movie) => (
            <Movie movie={movie} key={movie.id} search="search" />
          ))}
        {modalIsOpen && <Modal />}
      </div>
    </div>
  );
}
