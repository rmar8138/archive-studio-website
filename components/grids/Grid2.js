import styled from 'styled-components';

// Styles for 6 item grid

export const Grid2 = styled.div`
  flex: 0 0 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: 4.83vw 10.68vw 3.95vw 3.66vw 6.44vw 5.85vw 9.66vw 4.97vw 2.34vw;
  grid-template-rows: 11.42vw 21.96vw 10.98vw 5.85vw 21.96vw 2.92vw 2.92vw 19.03vw 13.91vw 5.85vw 44.36vw;

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
    grid-column: 3 / span 6;
    grid-row: 5 / span 1;
  }

  .item4 {
    grid-column: 2 / span 2;
    grid-row: 7 / span 2;
  }

  .item5 {
    grid-column: 5 / span 3;
    grid-row: 8 / span 2;
  }

  .item6 {
    grid-column: 3 / span 5;
    grid-row: 11 / span 1;
  }
`;

const Grid2Template = (props) => (
  <Grid2>
    {React.Children.map(props.children, (child, index) => (
      <div className={`item item${index + 1}`}>{child}</div>
    ))}
  </Grid2>
);

export default Grid2Template;
