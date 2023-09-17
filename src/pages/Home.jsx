import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function createTrendingMovies() {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
        console.error('Помилка при отриманні трендових фільмів:', error);
      }
    }

    createTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {error ? (
        <p>Виникла помилка при завантаженні фільмів.</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};
