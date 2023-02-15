import { useEffect, useState } from 'react';

import Tmdb from '../../services/Tmdb';
import MovieRow from '../../components/MovieRow/index';
import './styles.css';

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      const movies = await Tmdb.getHomeList();
      setMovieList(movies);
    };
    loadAll();
  }, []);
  return (
    <main>
      <section className="movie_list">
        {movieList.map((item, key) => (
          <MovieRow item={item} key={key} />
        ))}
      </section>
    </main>
  );
}
