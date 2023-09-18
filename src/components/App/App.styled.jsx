import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  &:hover,
  &:focus {
    color: #f6fa1c;
    text-shadow: -1px -1px 0 hsl(80, 70%, 35%), -2px -2px 1px hsl(80, 70%, 35%);
  }
  &.active {
    color: #f6fa1c;
  }
`;
