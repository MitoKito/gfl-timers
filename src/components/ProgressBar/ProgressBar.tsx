import { useContainerDimensions } from '@/utils/hook/useContainerDimensions';
import { format, getUnixTime, isWithinInterval } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface ProgressBarProps {
  time: {
    start: Date,
    end: Date,
  },
  date: Date;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ time, date }) => {
  const [InnerWidth, setInnerWidth] = useState(0);

  const start = getUnixTime(time.start);
  const end = getUnixTime(time.end);
  const now = getUnixTime(date);

  const percentage = Math.round(100 - (end - now) / (end - start) * 100 );
  const timeInRange = isWithinInterval(date, {
    start: time.start,
    end: time.end
  })

  const ref = useRef()
  const { width } = useContainerDimensions(ref)
  const overlayLeft = `calc(${Math.min(Math.max(InnerWidth, 0), 100)}% - ${width / 2}px)`;

  useEffect(() => {
    setInnerWidth(percentage);
  }, [])

  return (
    <S.ProgressBar>
      <S.TimerBar>
        <S.ProgressTime>{ format(time.start, 'HH:mm a') }</S.ProgressTime>
        <S.ProgressTime>{ format(time.end, 'HH:mm a') }</S.ProgressTime>
      </S.TimerBar>
      <S.Bar>
        <S.TimeOverlay style={{ left: overlayLeft }} hidden={timeInRange} ref={ ref }>{format(date, 'HH:mm a')}</S.TimeOverlay>
        <S.BarInner BarWidth={ InnerWidth }></S.BarInner>
      </S.Bar>
    </S.ProgressBar>
  );
};

export default ProgressBar;
