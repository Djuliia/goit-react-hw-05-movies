import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: #f6fa1c;
  }
`;
