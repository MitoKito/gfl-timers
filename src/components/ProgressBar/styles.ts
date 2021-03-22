import styled from 'styled-components';

export const ProgressBar = styled.div`
  display: flex;
  flex: 1 1 65%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProgressTime = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

export const TimerBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bar = styled.div`
  height: 4px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 6px;
  position: relative;
  margin: 0 0 20px 0;
`;

export const BarInner = styled.div`
  height: 100%;
  width: ${props => `${props.BarWidth}%` || "0%"};
  max-width: 100%;
  background: #D5C839;
  border-radius: inherit;
  transition: 'width 1s ease-in-out';
`;

export const TimeOverlay = styled.span`
  display: ${props => props.hidden ? 'block': 'none'};
  top: 4px;
  position: absolute;
  width: fit-content;
`;
