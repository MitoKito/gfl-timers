import { ThemeType } from '@/styles/theme';
import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  padding: 6px 26px;
  color: ${(provider: { theme: ThemeType }) => provider.theme.colors.white};
  font-size: 16px;
  line-height: 13px;
  font-weight: 500;
  background-color: ${(provider: { theme: ThemeType }) => provider.theme.colors.yellow_2};
  border: 0;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
`;
