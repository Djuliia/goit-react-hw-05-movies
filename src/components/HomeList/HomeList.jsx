import { Link, useLocation } from 'react-router-dom';

export const HomeList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <h3>Trending today</h3>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
