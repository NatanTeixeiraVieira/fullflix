export default function modalReducer(state, action) {
  switch (action.type) {
    case 'showModal':
      return {
        ...state,
        modalIsOpen: true,
        trailerUrl: action.payload.trailerUrl,
        movieInfo: action.payload.movieInfo,
      };
    case 'closeModal':
      return action.payload;
    default:
      return state;
  }
}
