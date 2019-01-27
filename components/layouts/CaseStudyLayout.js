import React from 'react';
import styled from 'styled-components';

const CaseStudyContainer = styled.div`
  color: ${(props) => props.theme.beige};
  background-color: ${(props) => props.theme.navy};
  display: flex;
`;

const CaseStudyText = styled.h1`
  display: inline-block;
  font-family: 'Suisse Intl Regular';
  font-size: 1.8vw;
  text-transform: uppercase;
  flex: 0 0 35%;
  padding: 10rem 0 0 7.2rem;
`;

const CaseStudyGrid = styled.div`
  /* flex: 1; */
  padding: 10rem 7.2rem 7.2rem 0;
`;

const CaseStudyLayout = (props) => {
  return (
    <CaseStudyContainer>
      <CaseStudyText>Case Study {props.name}</CaseStudyText>
      <CaseStudyGrid>{props.children}</CaseStudyGrid>
    </CaseStudyContainer>
  );
};

export default CaseStudyLayout;
