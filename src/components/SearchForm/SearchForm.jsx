import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' || '');

  const handleSubmit = e => {
    e.preventDefault();
    const movieId = e.currentTarget;
    if (movieId === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: movieId.elements.query.value });
    movieId.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="input movie"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
