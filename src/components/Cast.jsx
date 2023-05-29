import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from './getMovieData';

export default function Cast() {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [castMovieData, setCastMovieData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const castData = await getMovieCast(movieId);
        setCastMovieData(castData.data.cast);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {' '}
        {!loading && <h2>Cast:</h2>}
        {loading && <h2>Loading...</h2>}
        {castMovieData.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}
