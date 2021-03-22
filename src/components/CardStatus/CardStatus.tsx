import React from 'react';
import * as S from './styles';
import Battery from 'assets/icons/battery.svg';
import m16 from 'assets/images/m16_chibi.png';
import { isWithinInterval, toDate } from 'date-fns';

interface CardStatusProps {
  time: {
    start: Date;
    end: Date;
  };
  date: Date;
}

const CardStatus: React.FC<CardStatusProps> = ({ time, date }) => {
  const timeInRange = isWithinInterval(date, {
    start: time.start,
    end: time.end
  });

  return (
    <S.Status>
      {timeInRange
      ?
        <>
          <Battery />
          <S.Title>Battery are ready to be collected</S.Title>
        </>
      :
        <>
          <img src={ m16 } alt="M16 chibi sleeping"/>
          <S.Title>Battery recharging...</S.Title>
        </>
      }

    </S.Status>
  );
};

export default CardStatus;
