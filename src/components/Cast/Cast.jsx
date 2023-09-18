import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import { useEffect, useState } from 'react';
import { Img, List, ListItem } from './Cast.styled';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9556d16312333.5691dd2255721.jpg';

  useEffect(() => {
    // const controller = new AbortController();
    if (!movieId) return;
    async function createMovieCredits() {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
        toast.error('Cast not found');
      } finally {
        setLoading(false);
      }
    }
    createMovieCredits(movieId);
    return () => {};
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && !loading && toast.error('Cast not found.')}
      {cast && (
        <List>
          {cast.map(({ name, character, profile_path, id }) => (
            <ListItem key={id}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
