import styled from 'styled-components';
import { Breakpoints } from 'styles/breakpoint';

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 80px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: ${Breakpoints.medium}) {
    padding: 0 6vw;
  }
`;
