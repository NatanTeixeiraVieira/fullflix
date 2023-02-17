import { useEffect, useState } from 'react';

import Tmdb from '../../services/Tmdb';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import MovieRow from '../../components/MovieRow';
import Footer from '../../components/Footer';
import './styles.css';

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const movies = await Tmdb.getHomeList();
      setMovieList(movies);

      const getOriginalsMovies = movies.find((listMovies) => listMovies.slug === 'originals');
      const randomNumber = Math.floor(Math.random() * getOriginalsMovies.items.results.length - 1);
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
          {movieList.map((item, key) => (
            <MovieRow item={item} key={key} />
          ))}
        </section>
      </main>
      <Footer />
      {movieList.length === 0 && (
        <div className="loading">
          <img src="../../src/assets/loading.gif" alt="Carregando" />
        </div>
      )}
    </>
  );
}
