import { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setmovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      toast.error('Movie not found.');
    }

    return;

    async function createMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovieDetails(movieId);
        setmovieData(movie);
      } catch (error) {
        setError(true);
        console.log('Фільм не знайдено', error);
      } finally {
        setLoading(false);
      }
    }
    createMovieDetails();
  }, [movieId]);

  if (!movieData) {
    return <Loader />;
  }
  const defaultImg =
    'https://img.myloview.com/posters/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-and-retro-camera-cinematography-entertainment-equipment-movies-production-festival-banner-vector-illustration-400-170892759.jpg';
  const releaseYear = movieData?.release_date?.split('-')[0] || '';
  return (
    <main>
      {loading && <Loader />}
      {error && !loading && toast.error('Movie not found.')}
      <Link to={backLinkHref.current}>
        <IoIosArrowRoundBack />
        <span>Go back</span>
      </Link>
      <div>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : defaultImg
          }
          alt={movieData.title}
          width={250}
        />
        <h3>
          {movieData.title} {releaseYear}
        </h3>
        <p>User score: {movieData.vote_average}</p>
        <h4>Overview</h4>
        <p>{movieData.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movieData.genres.map(genre => (
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
