import React, { Component } from 'react';
import styled from 'styled-components';
import OurDesignGridTemplate from './OurDesignGridTemplate';

const Landing = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingImage = styled.div`
  height: 39.41vw;
  width: 59.12vw;

  img {
    height: 100%;
    width: 100%;
  }
`;

export class OurDesign extends Component {
  render() {
    return (
      <div>
        <Landing>
          <LandingImage>
            <img src="../static/ourdesign/scroll/Landing.jpg" alt="Coolmac" />
          </LandingImage>
        </Landing>
        <OurDesignGridTemplate />
      </div>
    );
  }
}

export default OurDesign;
