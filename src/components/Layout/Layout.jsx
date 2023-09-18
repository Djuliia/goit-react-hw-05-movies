import { StyledLink } from 'components/App/App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavStyles } from './Layout.styled';
import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <NavStyles>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavStyles>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
