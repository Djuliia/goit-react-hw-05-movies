import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #f6fa1c;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 24px;
`;
