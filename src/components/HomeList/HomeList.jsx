import { Link } from 'react-router-dom';

export const HomeList = ({ movies }) => {
  return (
    <>
      <h3>Trending today</h3>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
