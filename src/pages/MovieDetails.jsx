import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <main>
      <Link>
        <IoIosArrowRoundBack />
        <span>Go back</span>
      </Link>
      <ul>
        <li>
          <img src="" alt="" />
          <h3>...</h3>
          <h4>Overview</h4>
          <p>Genres</p>
          <p>Additional information</p>
          <ul>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </ul>
          <Outlet />
        </li>
      </ul>
    </main>
  );
};

export default MovieDetails;
