import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: ${p => p.theme.space[4]}px;
`;

export const CardWrapper = styled.li`
  border-radius: ${p => p.theme.radii.normal};

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;

  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.text};

  :hover {
    color: ${p => p.theme.colors.red};
  }
`;
