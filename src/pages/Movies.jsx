import { getMovieDataByRequest } from 'components/getMovieData';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import css from 'components/Movies.module.css';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('searchValue') ?? '';
  const location = useLocation();

  useEffect(() => {
    getMovieDataByRequest(searchValue).then(res =>
      setSearchMoviesData(res.data.results)
    );
  }, []);

  const fetchData = async (event, searchValue) => {
    event.preventDefault();
    setLoading(true);
    try {
      await getMovieDataByRequest(searchValue).then(res =>
        setSearchMoviesData(res.data.results)
      );

      setLoading(false);
    } catch (error) {
      console.log('Error fetching movie data:', error);
    }
  };

  const updateQueryString = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchValue: event.target.value });
  };

  return (
    <div>
      {loading && <div>Loading...</div>}

      <form onSubmit={event => fetchData(event, searchValue)}>
        <input
          value={searchValue}
          className={css.searchInput}
          onChange={updateQueryString}
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
      <ul className={css.filmList}>
        {searchMoviesData &&
          searchMoviesData.map(movie => {
            return (
              <Link
                to={`${movie.id}`}
                key={movie.id}
                state={{ from: location }}
              >
                <li className={css.card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.overview}
                    className={css.cardImg}
                  />
                  <h5> {movie.title}</h5>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
