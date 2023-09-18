import { PageContainer } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function createTrendingMovies() {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchTrendingMovies({
          signal: controller.signal,
        });
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    createTrendingMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PageContainer>
      {loading && <Loader />}
      <h2>Trending today</h2>
      {error &&
        !loading &&
        toast.error('Error loading movies. Please try again later.')}
      <MoviesList movies={movies} />
    </PageContainer>
  );
};

export default Home;
