import styled from 'styled-components';

// Styles for 6 item grid

export const Grid1 = styled.div`
  flex: 0 0 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: 5.27vw 14.64vw 2.92vw 2.04vw 4.68vw 2.92vw 19.76vw 2.19vw;
  grid-template-rows: 7.32vw 32.94vw 4.09vw 5.85vw 30.74vw 13.61vw 8.34vw 5.85vw 5.85vw 32.9vw 5.56vw;

  img {
    width: 100%;
    height: auto;
  }

  .item {
    background-color: #2a3442;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item1 {
    grid-column: 1 / span 5;
    grid-row: 1 / span 3;
  }

  .item2 {
    grid-column: 7 / span 2;
    grid-row: 2 / span 1;
  }

  .item3 {
    grid-column: 2 / span 1;
    grid-row: 6 / span 2;
  }

  .item4 {
    grid-column: 4 / span 4;
    grid-row: 5 / span 2;
  }

  .item5 {
    grid-column: 1 / span 3;
    grid-row: 10 / span 1;
  }

  .item6 {
    grid-column: 5 / span 4;
    grid-row: 9 / span 3;
  }
`;

const Grid1Template = (props) => (
  <Grid1>
    {React.Children.map(props.children, (child, index) => (
      <div className={`item item${index + 1}`}>{child}</div>
    ))}
  </Grid1>
);

export default Grid1Template;
