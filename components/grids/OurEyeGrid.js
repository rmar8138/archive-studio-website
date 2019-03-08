import styled from 'styled-components';

// Styles for repeating 20 item grid

const OurEyeGrid = styled.div`
  height: 100%;
  margin: 100vh 6rem 6rem 6rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 8.19vw 6.73vw 2.26vw 8.41vw 6.66vw 4.02vw 6.51vw 5.78vw 2.19vw 8.56vw 9.22vw 4.02vw 4.02vw 3.87vw;
  grid-template-rows: 13.17vw 21.37vw 7.54vw 11.56vw 21.44vw 13.83vw 13.03vw 12vw 32.06vw 42.24vw 15.44vw 32.72vw 15.81vw 18.15vw 30.3vw 20.49vw 35.57vw 16.83vw 21.44vw 2.63vw 21.44vw 10.68vw 26.79vw 1.46vw 30.16vw 4.39vw 43.92vw 15.95vw 34.11vw 9.15vw 33.67vw 9.29vw 24.81vw 18.37vw 28.25vw 17.2vw 49.04vw;
  overflow: scroll;

  div {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .item {
    background-color: #2a3442;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      background-color: #644f59;
    }
  }

  .item1 {
    grid-column: 2 / span 6;
    grid-row: 1 / span 2;
  }

  .item2 {
    grid-column: 10 / span 3;
    grid-row: 2 / span 2;
  }

  .item3 {
    grid-column: 1 / span 4;
    grid-row: 5 / span 2;
  }

  .item4 {
    grid-column: 8 / span 7;
    grid-row: 6 / span 2;
  }

  .item5 {
    grid-column: 3 / span 4;
    grid-row: 9 / span 1;
  }

  .item6 {
    grid-column: 9 / span 4;
    grid-row: 10 / span 1;
  }

  .item7 {
    grid-column: 3 / span 8;
    grid-row: 12 / span 1;
  }

  .item8 {
    grid-column: 1 / span 3;
    grid-row: 15 / span 1;
  }

  .item9 {
    grid-column: 7 / span 6;
    grid-row: 14 / span 2;
  }

  .item10 {
    grid-column: 3 / span 9;
    grid-row: 17 / span 1;
  }

  .item11 {
    grid-column: 7 / span 5;
    grid-row: 19 / span 1;
  }

  .item12 {
    grid-column: 7 / span 5;
    grid-row: 21 / span 1;
  }

  .item13 {
    grid-column: 2 / span 6;
    grid-row: 23 / span 2;
  }

  .item14 {
    grid-column: 9 / span 4;
    grid-row: 24 / span 3;
  }

  .item15 {
    grid-column: 1 / span 6;
    grid-row: 26 / span 2;
  }

  .item16 {
    grid-column: 5 / span 9;
    grid-row: 29 / span 1;
  }

  .item17 {
    grid-column: 1 / span 5;
    grid-row: 31 / span 2;
  }

  .item18 {
    grid-column: 8 / span 6;
    grid-row: 32 / span 2;
  }

  .item19 {
    grid-column: 2 / span 8;
    grid-row: 35 / span 1;
  }

  .item20 {
    grid-column: 6 / span 6;
    grid-row: 37 / span 1;
  }
`;

const OurEyeGridTemplate = (props) => (
  <OurEyeGrid>
    {React.Children.map(props.children, (child, index) => (
      <div className={`item item${index + 1}`}>{child}</div>
    ))}
  </OurEyeGrid>
);

export default OurEyeGridTemplate;
