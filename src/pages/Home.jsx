import { getTrendMovieData } from 'components/getMovieData';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from 'components/Home.module.css';

export default function Home() {
  const location = useLocation();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendMovieData().then(response => setMovieData(response.data.results));
  }, []);

  return (
    <div>
      {' '}
      <ul className={css.filmList}>
        {movieData.map(movie => {
          return (
            <Link
              to={`movies/${movie.id}`}
              key={movie.id}
              state={{ from: location }}
            >
              <li className={css.cardImg}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.overview}
                  className={css.cardImg}
                />
                <h5>{movie.title}</h5>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
