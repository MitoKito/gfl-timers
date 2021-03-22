import * as React from "react";
import MainLayout from "../layouts/Main";
import { Title, MaxWidth, Button, Card } from 'components';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { format, parse, setHours } from "date-fns";

const Time = [
  {
    start: format(setHours(new Date(), 1), 'HH'),
    end: format(setHours(new Date(), 4), 'HH')
  },
  {
    start: format(setHours(new Date(), 19), 'HH'),
    end: format(setHours(new Date(), 22), 'HH')
  },
  {
    start: format(setHours(new Date(), 6), 'HH'),
    end: format(setHours(new Date(), 9), 'HH')
  }
]

const Carousel = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const IndexPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <MainLayout>
      <MaxWidth>
        <Title>Girls Frontline Timers</Title>
        <Button>EN</Button>
        <Carousel>
          {Time.map(( node ) => {
            return (
              <Card
                key={`${node.start}-${node.end}`}
                start={parse(node.start, "HH", new Date())}
                end={parse(node.end, "HH", new Date())}
                currentDate={date}
              />
            );
          })}
        </Carousel>
      </MaxWidth>
    </MainLayout>
  )
}

export default IndexPage
