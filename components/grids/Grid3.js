import React from 'react';
import styled from 'styled-components';

// Styles for 17 item grid

const Grid3 = styled.div`
  flex: 0 0 60%;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 4.39vw 2.92vw 0.29vw 11.42vw 2.92vw 2.92vw 3.07vw 1.61vw 2.92vw 4.39vw 2.92vw 2.78vw 4.24vw 7.61vw;
  grid-template-rows: 11.42vw 32.94vw 5.85vw 10.98vw 21.96vw 5.85vw 5.56vw 5.41vw 21.96vw 5.85vw 5.85vw 27.08vw 5.85vw 5.85vw 11.71vw 21.96vw 5.85vw 4.83vw 5.85vw 22.25vw 10.68vw 5.85vw 5.85vw 27.08vw 11.71vw 5.56vw 5.85vw 10.54vw 5.85vw 21.96vw 6vw;
  overflow: scroll;

  h2,
  p {
    font-family: 'Suisse Works Book';
    color: ${(props) => props.theme.beige};
    line-height: 1.6;
  }

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 1.6vw;
  }

  p {
    font-size: 1vw;
  }

  .item {
    background-color: #2a3442;
    color: white;
    display: flex;
  }

  .item1 {
    grid-column: 1 / span 8;
    grid-row: 1 / span 2;
  }

  .item2 {
    grid-column: 10 / span 5;
    grid-row: 2 / span 1;
  }

  .item3 {
    grid-column: 2 / span 3;
    grid-row: 5 / span 1;
  }

  .item4 {
    grid-column: 7 / span 8;
    grid-row: 4 / span 4;
  }

  .item5 {
    grid-column: 1 / span 5;
    grid-row: 7 / span 3;
  }

  .item6 {
    grid-column: 8 / span 5;
    grid-row: 9 / span 1;
  }

  .item7 {
    grid-column: 4 / span 5;
    grid-row: 12 / span 2;
  }

  .item8 {
    grid-column: 10 / span 5;
    grid-row: 11 / span 2;
  }

  .item9 {
    grid-column: 2 / span 3;
    grid-row: 16 / span 1;
  }

  .item10 {
    grid-column: 7 / span 8;
    grid-row: 15 / span 4;
  }

  .item11 {
    grid-column: 1 / span 5;
    grid-row: 18 / span 3;
  }

  .item12 {
    grid-column: 7 / span 7;
    grid-row: 20 / span 2;
  }

  .item13 {
    grid-column: 1 / span 8;
    grid-row: 24 / span 3;
  }

  .item14 {
    grid-column: 10 / span 5;
    grid-row: 23 / span 2;
  }

  .item15 {
    grid-column: 3 / span 8;
    grid-row: 28 / span 4;
  }

  .item16 {
    grid-column: 12 / span 3;
    grid-row: 26 / span 3;
  }

  .item17 {
    grid-column: 12 / span 3;
    grid-row: 30 / span 1;
  }
`;

const Grid3Template = (props) => (
  <Grid3>
    {React.Children.map(props.children, (child, index) => (
      <div className={`item item${index + 1}`}>{child}</div>
    ))}
  </Grid3>
);

export default Grid3Template;
