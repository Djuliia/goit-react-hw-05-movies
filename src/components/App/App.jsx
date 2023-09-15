import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Layout } from '../Layout/Layout';
import { Reviews } from '../Reviews/Reviews';
import { Cast } from '../Cast/Cast';
import { lazy } from 'react';

const Movies = lazy(() => import('../../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails.jsx'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
