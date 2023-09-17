import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function createMovieCredits() {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        console.log(reviews);
      } catch (error) {
        // setError(true);
        console.error('Cast не знайдено', error);
      } finally {
        // setLoader(false);
      }
    }
    createMovieCredits(movieId);
  }, [movieId, reviews]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h4>Author:{author}</h4>
          <p>{content}</p>
        </li>
      ))}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </ul>
  );
};
