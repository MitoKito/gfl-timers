import styled from 'styled-components';
import { ThemeType } from '@/styles/theme';

export const Title = styled.h1`
  margin: 90px 0 13px 0;
  font-weight: normal;
  font-size: 28px;
  color: ${(provider: { theme: ThemeType }) => provider.theme.colors.white};
`;
