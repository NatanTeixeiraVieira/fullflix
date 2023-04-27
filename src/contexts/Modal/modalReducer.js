import { CLOSE_MODAL, SHOW_MODAL } from './actions';

export default function modalReducer(state, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        trailerUrl: action.payload.trailerUrl,
        movieInfo: action.payload.movieInfo,
      };
    case CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
}
