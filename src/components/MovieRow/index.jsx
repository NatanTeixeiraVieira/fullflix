import { useState } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Movie from '../Movie';

import './styles.css';

export default function MovieRow({ item, key }) {
  const [scrollX, setscrollX] = useState(0);

  const handleArrowLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x >= 0) {
      x = 0;
    }
    setscrollX(x);
  };
  const handleArrowRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = item.items.results.length * 150;
    if (x <= window.innerWidth - listWidth) {
      x = window.innerWidth - listWidth - 64;
    }
    setscrollX(x);
  };
  return (
    <div className="movie_row-list_area" key={key}>
      <h2>{item.title}</h2>
      <div
        className="movie_row"
        style={{ marginLeft: scrollX, width: item.items.results.length * 150 }}
      >
        <div className="div-arrow_left" onClick={handleArrowLeft}>
          <KeyboardArrowLeftIcon style={{ fontSize: 50 }} />
        </div>
        <div className="div-arrow_right" onClick={handleArrowRight}>
          <KeyboardArrowRightIcon style={{ fontSize: 50 }} />
        </div>
        {item.items.results.length > 0 &&
          item.items.results.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
