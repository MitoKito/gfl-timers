import React from 'react';
import * as S from './styles';

const MaxWidth: React.FC = ({ children, ...props }) => {
  return (
    <S.MaxWidth {...props}>
      { children }
    </S.MaxWidth>
  );
};

export default MaxWidth;
