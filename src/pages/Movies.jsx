import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // const controllerRef = useRef();
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    async function createMoviesByQuery() {
      // if (controllerRef.current) {
      //   controllerRef.current.abort();
      // }
      // controllerRef.current = new AbortController();

      try {
        const { results } = await fetchSearchMovie(query);
        // const { results } = await fetchSearchMovie(query, {
        //   signal: controllerRef.current.signal,
        // });

        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    createMoviesByQuery();
  }, [query]);

  return (
    <main>
      {loading && <Loader />}
      <SearchForm />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
