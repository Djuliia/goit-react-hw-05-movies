import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  // const [error, setError] = useState(false);
  // const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function createMovieCredits() {
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
        console.log(cast);
      } catch (error) {
        // setError(true);
        console.error('Cast не знайдено', error);
      } finally {
        // setLoader(false);
      }
    }
    createMovieCredits(movieId);
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
              )}

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
