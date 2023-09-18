import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';
import toast from 'react-hot-toast';

const Movies = () => {
  const controllerRef = useRef();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    async function createMoviesByQuery() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();

      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchSearchMovie(query, {
          signal: controllerRef.current.signal,
        });

        setMovies(results);
      } catch (error) {
        toast.error('');
      } finally {
        setLoading(false);
      }
    }

    createMoviesByQuery();
  }, [query]);

  return (
    <main>
      {loading && <Loader />}
      {error && !loading && toast.error('Movie not found.')}
      <SearchForm />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
