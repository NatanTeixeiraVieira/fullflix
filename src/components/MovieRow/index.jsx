import { useState, useContext } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import './styles.css';

export default function MovieRow({ item }) {
  const [scrollX, setscrollX] = useState(0);
  const { showModal } = useContext(ModalContext);

  const handleOpenModal = (movieId) => {
    showModal(movieId);
  };

  const handleArrowLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x >= 0) {
      x = 0;
    }
    setscrollX(x);
  };
  const handleArrowRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = item.items.results.length * 150;
    if (x <= window.innerWidth - listWidth) {
      x = window.innerWidth - listWidth - 64;
    }
    setscrollX(x);
  };
  return (
    <div className="movie_row-list_area">
      <h2>{item.title}</h2>
      <div
        className="movie_row"
        style={{ marginLeft: scrollX, width: item.items.results.length * 150 }}
      >
        <div className="div-arrow_left" onClick={handleArrowLeft}>
          <KeyboardArrowLeftIcon style={{ fontSize: 50 }} />
        </div>
        <div className="div-arrow_right" onClick={handleArrowRight}>
          <KeyboardArrowRightIcon style={{ fontSize: 50 }} />
        </div>
        {item.items.results.length > 0 &&
          item.items.results.map((movie) => (
            <div
              className="movie_row-movie"
              key={movie.id}
              onClick={() => handleOpenModal(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt="Imagem do filme"
              />
              <div className="movie_row-movie_name">{movie.name ? movie.name : movie.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
