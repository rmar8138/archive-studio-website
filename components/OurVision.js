import React, { Component } from 'react';
import { Container } from 'next/app';
import Link from 'next/link';
import styled from 'styled-components';
import Page from './Page';
import MyContext from '../context';
import OurVisionGridTemplate from './OurVisionGridTemplate';

const Landing = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const LandingImage = styled.div`
  height: 39.41vw;
  width: 59.12vw;

  img {
    height: 100%;
    width: 100%;
  }
`;

export class OurVision extends Component {
  render() {
    return (
      <Container>
        <Landing>
          <LandingImage>
            <Link href="/coolmac">
              <img src="/static/ourvision/scroll/Landing.jpg" alt="Coolmac" />
            </Link>

            <Page />
          </LandingImage>
        </Landing>
        <OurVisionGridTemplate />
      </Container>
    );
  }
}

export default OurVision;
