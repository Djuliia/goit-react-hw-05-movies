import { useSearchParams } from 'react-router-dom';
import { BtnSubmit, Form, Input } from './SearchForm.styled';
import toast from 'react-hot-toast';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      toast.error('Enter the movie');
      setSearchParams({});
    }
    setSearchParams({ query: inputValue });
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Enter movie"
        />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </Form>
    </section>
  );
};
