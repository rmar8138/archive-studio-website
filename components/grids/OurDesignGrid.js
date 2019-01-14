import styled from 'styled-components';

// Styles for repeating 8 item grid

const OurDesignGrid = styled.div`
  height: 100%;
  padding-bottom: 6rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 18.3vw 3.66vw 7.32vw 3.66vw 18.3vw;
  grid-template-rows: 7.32vw 25.62vw 7.32vw 7.32vw 21.96vw 7.32vw 11.71vw 21.23vw 11.71vw 7.32vw 21.96vw 7.32vw 14.64vw 18.3vw 14.64vw;
  overflow: scroll;

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
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
  }

  .item2 {
    grid-column: 4 / span 2;
    grid-row: 1 / span 2;
  }

  .item3 {
    grid-column: 2 / span 4;
    grid-row: 5 / span 1;
  }

  .item4 {
    grid-column: 1 / span 2;
    grid-row: 7 / span 2;
  }

  .item5 {
    grid-column: 4 / span 2;
    grid-row: 8 / span 2;
  }

  .item6 {
    grid-column: 1 / span 4;
    grid-row: 11 / span 1;
  }

  .item7 {
    grid-column: 1 / span 2;
    grid-row: 14 / span 2;
  }

  .item8 {
    grid-column: 4 / span 2;
    grid-row: 13 / span 2;
  }
`;

export default OurDesignGrid;
