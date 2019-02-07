import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

export const OurVisionLayout = styled.div`
  display: flex;
  position: relative;

  .ourvision-header {
    font-family: 'Suisse Intl Regular';
    position: absolute;
    top: 3.6rem;
    right: 3.6rem;
  }
`;
export const OurVisionBackBar = styled.button`
  border: none;
  background-color: ${(props) => props.theme.offwhite};
  height: 100;
  flex: 0 0 6%;
  cursor: pointer;
`;

export const OurVisionContainer = styled.div`
  background-color: ${(props) => props.theme.beige};
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const OurVisionMain = styled.div`
  padding: 7.3vw 4.3vw 4.3vw 4.3vw;
  height: 100vh;
  display: flex;
`;

export const OurVisionText = styled.div`
  padding-right: 4.3vw;
  flex: 0 0 50%;

  h1 {
    margin-bottom: 2.6rem;
  }
`;

export const OurVisionImage = styled.div`
  width: 43vw;
  height: 43vw;
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OurVisionPageLayout = (props) => (
  <OurVisionLayout>
    <h1 className="ourvision-header">Our Vision</h1>
    <OurVisionBackBar onClick={() => Router.push('/')} />
    <OurVisionContainer>{props.children}</OurVisionContainer>
  </OurVisionLayout>
);

////////////////////////////////
// CAROUSEL PAGES
////////////////////////////////

export const OurVisionMainLayout = (props) => (
  <OurVisionMain>
    <OurVisionText>{props.children}</OurVisionText>
    <OurVisionImage />
  </OurVisionMain>
);

////////////////////////////////
// GRID ONLY PAGES
////////////////////////////////

export const OurVisionGridOnlyLayout = styled.div`
  display: flex;
`;

export const GridOnlyTextSection = styled.div`
  height: 100vh;
  padding: 7.3vw 4.3vw 4.3vw 4.3vw;
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-bottom: 2rem;
  }

  li {
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  span {
    font-weight: 700;
  }
`;

export const GridOnlyGridSection = styled.div`
  padding: 7.3vw 4.3vw 4.3vw 0;
  height: 100vh;
  flex: 1;
  overflow: scroll;
`;
