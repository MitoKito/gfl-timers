import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`;

interface MainProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <Main role="main" id="#Skip">
      {children}
    </Main>
  );
};

export default MainLayout;
