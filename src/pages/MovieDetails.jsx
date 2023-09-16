import { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams;
  const [movieById, setMovieById] = useState(null);
  // const [error, setError] = useState(false);
  // const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    // setLoader(true);
    async function createMovieDetails(movieId) {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieById(movie);
        console.log(movieById);
      } catch (error) {
        // setError(true);
        console.error('Фільм не знайдено', error);
      } finally {
        // setLoader(false);
      }
    }
    createMovieDetails(movieId);
  }, [movieId, movieById]);

  if (!movieById) {
    return <div>Loading...</div>;
  }

  const releaseYear = movieById?.release_date?.split('-')[0] || '';
  return (
    <main>
      <Link to={backLinkHref.current}>
        <IoIosArrowRoundBack />
        <span>Go back</span>
      </Link>
      <div>
        <img src={movieById.poster_path} alt={movieById.title} />
        <h3>
          {movieById.title} {releaseYear}
        </h3>
        <p>User score: {movieById.vote_average}</p>
        <h4>Overview</h4>
        <p>{movieById.overview}</p>
        <p>Genres</p>
        <ul>
          {movieById.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
