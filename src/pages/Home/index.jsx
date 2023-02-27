import { useState, useEffect, useRef, useContext } from 'react';

import Tmdb from '../../services/Tmdb';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import MovieRow from '../../components/MovieRow';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import './styles.css';

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const movieListRef = useRef([]);
  const { modalIsOpen } = useContext(ModalContext);

  useEffect(() => {
    const loadAll = async () => {
      const movies = await Tmdb.getHomeList();
      movieListRef.current = movies;

      const getOriginalsMovies = movies.find(
        (listMovies) => listMovies.slug === 'originals'
      );
      const randomNumber = Math.floor(
        Math.random() * getOriginalsMovies.items.results.length - 1
      );
      const chosenMovie = getOriginalsMovies.items.results[randomNumber];
      const chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id);
      setFeaturedMovie(chosenMovieInfo);
    };
    loadAll();
  }, []);

  return (
    <>
      <Header />
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
