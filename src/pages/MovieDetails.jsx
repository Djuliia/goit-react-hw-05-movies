import { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';
import {
  GoBackLink,
  InfoContainer,
  LinkWrapper,
  StyledLink,
  Wrapper,
} from 'components/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setmovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    if (!movieId) {
      toast.error('Movie not found.');
    }

    async function createMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovieDetails(movieId, {
          signal: controller.signal,
        });
        setmovieData(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    createMovieDetails();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movieData) {
    return <Loader />;
  }
  const defaultImg =
    'https://img.myloview.com/posters/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-and-retro-camera-cinematography-entertainment-equipment-movies-production-festival-banner-vector-illustration-400-170892759.jpg';
  const releaseYear = movieData?.release_date?.split('-')[0] || '';
  return (
    <>
      <main>
        {loading && <Loader />}
        {error && !loading && toast.error('Movie not found.')}
        <GoBackLink to={backLinkHref.current}>
          <IoIosArrowRoundBack />
          <span>Go back</span>
        </GoBackLink>
        <Wrapper>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
            width={250}
          />

          <InfoContainer>
            <h3>
              {movieData.title} {releaseYear}
            </h3>
            <p style={{ display: 'inline' }}>
              User score: {movieData.vote_average}
            </p>
            <h4>Overview</h4>
            <p>{movieData.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </InfoContainer>
        </Wrapper>
      </main>

      <LinkWrapper>
        <h4>Additional information</h4>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </LinkWrapper>
      <Outlet />
    </>
  );
};

export default MovieDetails;
