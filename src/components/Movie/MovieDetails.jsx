import React, { useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDataById } from 'components/getMovieData';
import { useEffect } from 'react';

export default function MovieDetails() {
  const location = useLocation();
  console.log(location);
  const [selectedMovieData, setSelectedMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const { title, poster_path } = selectedMovieData.data || {};

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const movieData = await getMovieDataById(movieId);
        setSelectedMovieData(movieData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>GO back</Link>
      {loading && <div>Loading...</div>}
      <h1> {title}</h1>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
