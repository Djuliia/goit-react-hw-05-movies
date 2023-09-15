import { useState } from 'react';
import { MoviesListBySearch } from '../components/MoviestListBySearch/MoviesListBySearch';
import { SearchForm } from 'components/SearchForm/SearchForm';

 const Movies = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchForm />
      <MoviesListBySearch />
    </>
  );
};

export default Movies;