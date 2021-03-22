import React from 'react';
import * as S from './styles';
import { CardStatus, ProgressBar } from 'components';
import { format } from 'date-fns';

interface CardProps {
  start: Date;
  end: Date;
  currentDate: Date;
}

const Card: React.FC<CardProps> = ({ start, end, currentDate }) => {
  return (
    <S.Card>
      <CardStatus time={{start, end}} date={currentDate}/>
      <S.Timer>
        <ProgressBar time={{start, end}} date={currentDate}/>
        <S.Time>{format(start, 'HH:mm')} - {format(end, 'HH:mm')}</S.Time>
      </S.Timer>
    </S.Card>
  )
}

export default Card;
