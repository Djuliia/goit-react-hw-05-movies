import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Reviews } from '../Reviews/Reviews';
import { Cast } from '../Cast/Cast';
import { lazy } from 'react';
import { AppContainer } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Movies = lazy(() => import('../../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails.jsx'));
const Home = lazy(() => import('../../pages/Home.jsx'));

export const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </AppContainer>
  );
};
