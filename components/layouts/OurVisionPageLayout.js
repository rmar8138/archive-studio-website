import React from 'react';
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

export const OurVisionPageHeader = styled.h1`
  content: 'Our Vision';
  display: inline-block;
  position: absolute;
  top: 3.6rem;
  right: 3.6rem;
`;

export const OurVisionText = styled.div`
  flex: 0 0 50%;

  h1 {
    margin-bottom: 2.6rem;
  }
`;

export const OurVisionImage = styled.div`
  flex: 1;
`;

export const OurVisionPageLayout = (props) => (
  <OurVisionLayout>
    <h1 className="ourvision-header">Our Vision</h1>
    <OurVisionBackBar />
    <OurVisionContainer>{props.children}</OurVisionContainer>
  </OurVisionLayout>
);

export const OurVisionMainLayout = (props) => (
  <OurVisionMain>
    <OurVisionPageHeader />
    <OurVisionText>{props.children}</OurVisionText>
    <OurVisionImage />
  </OurVisionMain>
);
