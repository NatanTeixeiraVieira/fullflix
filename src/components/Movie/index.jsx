import { useContext } from 'react';

import { ModalContext } from '../../contexts/Modal/ModalContext';

import './styles.css';

export default function Movie({ movie, key }) {
  const { showModal } = useContext(ModalContext);

  const handleOpenModal = (movieId) => {
    showModal(movieId);
  };
  return (
    <div className="movie" key={key} onClick={() => handleOpenModal(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="Imagem do filme"
      />
      <div className="movie_name">{movie.name ? movie.name : movie.title}</div>
    </div>
  );
}
