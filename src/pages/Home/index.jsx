import { useContext } from 'react';

import FeaturedMovie from '../../components/FeaturedMovie';
import MovieRow from '../../components/MovieRow';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import './styles.css';
import { RequestMoviesContext } from '../../contexts/RequestMoviesContext/RequestMoviesContext';

export default function Home() {
  const { movieListRef, featuredMovie } = useContext(RequestMoviesContext);
  const { modalIsOpen } = useContext(ModalContext);

  return (
    <>
      <main>
        {featuredMovie && <FeaturedMovie featuredMovie={featuredMovie} />}
        <section className="movie_list">
          {movieListRef.current.map((item) => (
            <MovieRow item={item} key={item.slug} />
          ))}
        </section>
      </main>

      {movieListRef.current.length === 0 ? (
        <div className="loading">
          <img src="../../src/assets/loading-image.png" alt="Carregando" />
        </div>
      ) : (
        <Footer />
      )}
      {modalIsOpen && <Modal />}
    </>
  );
}
