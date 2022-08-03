import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const MovieInfo = styled.div`
  display: grid;
  padding-left: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[4]}px;
`;

export const AddInfo = styled.div`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  border-top: ${p => p.theme.borders.normal} black;
  border-bottom: ${p => p.theme.borders.normal} black;
`;

export const AddLink = styled(NavLink)`
  width: ${p => p.theme.sizes.button}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.red};
  }
`;
