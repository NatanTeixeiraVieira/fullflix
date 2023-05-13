import { useContext, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

import { ModalContext } from '../../contexts/Modal/ModalContext';
import { useSetMyList } from '../../hooks/myList';

import './styles.css';

export default function Modal() {
  const { trailerUrl, movieInfo, closeModal } = useContext(ModalContext);
  const [isFavorite, setIsFavorite] = useState(() =>
    JSON.parse(localStorage.getItem('myList'))?.includes(movieInfo.id)
  );
  const [videoHeight, setVideoHeight] = useState(
    movieInfo.overview.length < 900 ? '28vw' : '24vw'
  );

  const [addMovieToMyList, removeMovieToMyList] = useSetMyList();

  useEffect(() => {
    handleVideoHeigth();
  }, []);

  const genres = movieInfo.genres.map((genre) => genre.name).join(', ');

  const handleCloseModal = () => {
    closeModal();
  };

  const handleVideoHeigth = () => {
    const widthScreen = window.innerWidth;
    if (widthScreen <= 1020 && widthScreen > 760) {
      setVideoHeight('45vw');
    } else if (widthScreen <= 760) {
      setVideoHeight('54vw');
    }
  };

  const handleMyList = () => {
    if (isFavorite) {
      removeMovieToMyList(movieInfo.id);
      alert('Conteúdo removido da sua lista');
    } else {
      addMovieToMyList(movieInfo.id);
      alert('Conteúdo adicionado à sua lista');
    }
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="modal">
      <div className="xIcon" onClick={handleCloseModal}>
        <CloseIcon />
      </div>
      <div className="trailer">
        {trailerUrl ? (
          <ReactPlayer
            modestbranding="1"
            light
            url={`${trailerUrl}?&showinfo=0&showsearch=0&rel=0`}
            width="100%"
            height={videoHeight}
            style={{ maxWidth: '100vw' }}
            controls
          />
        ) : (
          <p style={{ height: videoHeight }}>
            Desculpe, este conteúdo não está disponível
          </p>
        )}
      </div>
      <div
        className={`icon_add_remove_my_list ${
          isFavorite ? 'removeFromMyList' : 'addToMyList'
        }`}
        onClick={handleMyList}
        style={{ top: `calc(${videoHeight} - 38px - 1rem)` }}
      >
        {isFavorite ? (
          <RemoveIcon fontSize="large" />
        ) : (
          <AddIcon fontSize="large" />
        )}
      </div>
      <div className="movie_info">
        <div className="movie_firs_info">
          {movieInfo.vote_average && (
            <span className="movie_vote_average">
              {movieInfo.vote_average.toFixed(1)} pontos
            </span>
          )}
          <span className="movie_first_air_date">
            {movieInfo.first_air_date}
          </span>
          <span className="movie_resolution">HD</span>
        </div>
        <div className="movie_description_and_second_info">
          <div className="movie_description">{movieInfo.overview}</div>
          <div className="movie_second_info">
            {genres && (
              <p>
                <strong>Gêneros: </strong>
                {genres}
              </p>
            )}
            {movieInfo.original_language && (
              <p>
                <strong>Linguagem original: </strong>
                {movieInfo.original_language}
              </p>
            )}
            {movieInfo.vote_count && (
              <p>
                <strong>Votos totais: </strong>
                {movieInfo.vote_count}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
