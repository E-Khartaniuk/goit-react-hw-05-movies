import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './getMovieData';

export default function Reviews() {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const reviewsResponseData = await getMovieReviews(movieId);
        setReviewsData(reviewsResponseData.data.results);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  console.log(reviewsData);

  return (
    <div>
      {!loading && <h2>Reviews:</h2>}
      {loading && <h2>Loading...</h2>}
      <ul>
        {reviewsData.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
