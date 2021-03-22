import { ThemeType } from '@/styles/theme';
import styled from 'styled-components';

export const Card = styled.div`
  min-height: 165px;
  width: 100%;
  background-color: ${(provider: { theme: ThemeType }) => provider.theme.colors.yellow_2};
  border-radius: 6px;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Timer = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

export const Time = styled.span`
  font-size: 36px;
  text-align: right;
  font-weight: normal;
  margin: 0;
  flex: 1 1 auto;
`;
