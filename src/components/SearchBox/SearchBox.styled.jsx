import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchbarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
`;

export const SearchButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[0]};
  right: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.secondaryText};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const SearchForm = styled(Form)`
  position: relative;
`;

export const Input = styled(Field)`
  display: block;
  width: ${p => p.theme.sizes.input}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;
