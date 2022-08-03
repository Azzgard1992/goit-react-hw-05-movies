import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: ${p => p.theme.sizes.container}px;
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal} black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
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
