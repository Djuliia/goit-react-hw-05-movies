import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  color: #f6fa1c;
  align-self: flex-start;
  padding-top: 24px;
  padding-left: 24px;
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

export const Main = styled.main`
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LinkWrapper = styled.section`
  padding: 24px;
  box-shadow: 0px 4px 4px 0px rgba(246, 250, 28, 0.4) inset,
    0px -4px 4px 0px rgba(246, 250, 28, 0.4) inset;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  &.active {
    color: #f6fa1c;
  }
  &:hover {
    color: #f6fa1c;
  }
`;

export const GenresList = styled.ul``;
