import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { GlobalTypography } from 'styles/typography';
import { theme } from 'styles/theme';

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`;

interface MainProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalTypography />
      <Main role="main" id="#Skip">
        {children}
      </Main>
    </ThemeProvider>
  );
};

export default MainLayout;
