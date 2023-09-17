import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      setSearchParams({});
    }
    setSearchParams({ query: inputValue });
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
