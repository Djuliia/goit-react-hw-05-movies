import { useLocation } from 'react-router-dom';
import { MovieList, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <MovieList>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </StyledLink>
          </li>
        ))}
      </MovieList>
    </section>
  );
};
