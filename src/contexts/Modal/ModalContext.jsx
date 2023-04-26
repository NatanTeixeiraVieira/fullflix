import { createContext, useMemo, useReducer } from 'react';
import Tmdb from '../../services/Tmdb';
import reducer from './modalReducer';

const initialValue = {
  modalIsOpen: false,
  trailerUrl: null,
  movieInfo: null,
};

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const showModal = async (movieId) => {
    const requestTrailer = await Tmdb.getMovieVideos(movieId);
    const trailerKey = requestTrailer?.results[0]?.key;
    const trailerUrl = trailerKey
      ? `https://youtube.com/watch?v=${trailerKey}`
      : undefined;
    const movieInfo = await Tmdb.getMovieInfo(movieId);
    dispatch({ type: 'showModal', payload: { trailerUrl, movieInfo } });
  };

  const closeModal = () => {
    dispatch({ type: 'closeModal', payload: initialValue });
  };

  const value = useMemo(() => ({ ...state, showModal, closeModal }), [state]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
