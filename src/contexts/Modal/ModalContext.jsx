import { createContext, useMemo, useReducer } from 'react';
import Tmdb from '../../services/Tmdb';
import reducer from './modalReducer';
import { CLOSE_MODAL, SHOW_MODAL } from './actions';

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
    dispatch({ type: SHOW_MODAL, payload: { trailerUrl, movieInfo } });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL, payload: initialValue });
  };

  const value = useMemo(() => ({ ...state, showModal, closeModal }), [state]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
