import { useContext } from 'react';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import './styles.css';
import { useSetMyList } from '../../hooks/myList';

export default function FeaturedMovie({ featuredMovie }) {
  const { showModal } = useContext(ModalContext);
  const addMovieToMyList = useSetMyList();

  const handleShowModal = () => {
    showModal(featuredMovie.id);
  };

  const handleAddToMyList = () => {
    addMovieToMyList(featuredMovie.id);
  };

  const movieYear = new Date(featuredMovie.first_air_date).getFullYear();
  const genres = featuredMovie.genres.map((genre) => genre.name).join(', ');
  const seasonsNumber = featuredMovie.seasons.length;
  const description =
    featuredMovie.overview.length > 200
      ? `${featuredMovie.overview.substring(0, 200)}...`
      : featuredMovie.overview;
  return (
    <section
      className="section-featured_movie"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="vertical_gradient">
        <div className="horizontal_gradient">
          <div className="featured_movie-name">{featuredMovie.name}</div>
          <div className="featured_movie-info">
            <div className="featured_movie-points">
              {featuredMovie.vote_average.toFixed(1)} pontos
            </div>
            <div className="featured_movie-year">{movieYear}</div>
            <div className="featured_movie-seasons_number">
              {seasonsNumber} temporada{seasonsNumber !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured_movie-description">{description}</div>
          <div className="featured_movie-buttons">
            <button type="button" onClick={handleShowModal}>
              ▶ Assistir
            </button>
            <button
              type="button"
              className="featured_movie-button_my_list"
              onClick={handleAddToMyList}
            >
              + Minha lista
            </button>
          </div>
          <div className="featured_movie-genres">
            {genres && <strong>Gêneros: </strong>}
            {genres}
          </div>
        </div>
      </div>
    </section>
  );
}
