import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: ${p => p.theme.space[4]}px;
`;

export const CardWrapper = styled.li`
  border-radius: ${p => p.theme.radii.normal};
`;
