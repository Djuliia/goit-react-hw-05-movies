import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { List } from './Reviews.styled';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (!movieId) return;
    async function createMovieCredits() {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchMovieReviews(movieId, {
          signal: controller.signal,
        });
        setReviews(results);
        console.log(reviews);
      } catch (error) {
        setError(true);
        console.error('Cast не знайдено', error);
      } finally {
        setLoading(false);
      }
    }
    createMovieCredits(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId, reviews]);

  return (
    <List>
      {loading && <Loader />}
      {error && !loading && toast.error('Cast not found.')}
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h4>Author:{author}</h4>
          <p>{content}</p>
        </li>
      ))}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </List>
  );
};
