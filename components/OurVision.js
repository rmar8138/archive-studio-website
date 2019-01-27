import React, { Component } from 'react';
import { Container } from 'next/app';
import Link from 'next/link';
import styled from 'styled-components';
import Page from './Page';
import OurVisionGridTemplate from '../components/grids/OurVisionGrid';

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
      <div>
        <Landing>
          <LandingImage>
            <Link href="/coolmac">
              <img src="/static/ourvision/scroll/Landing.jpg" alt="Coolmac" />
            </Link>
          </LandingImage>
        </Landing>
        <OurVisionGridTemplate>
          <Link href="/posters">
            <img src="/static/ourvision/scroll/1.jpg" alt="Posters" />
          </Link>
          <Link href="/hype">
            <img src="/static/ourvision/scroll/2.jpg" alt="Hype" />
          </Link>
          <Link href="/micra">
            <img src="/static/ourvision/scroll/3.jpg" alt="Micra" />
          </Link>
          <Link href="/pigalle">
            <img src="/static/ourvision/scroll/4.jpg" alt="Pigalle" />
          </Link>
          <Link href="/inq">
            <img src="/static/ourvision/scroll/5.jpg" alt="INQ" />
          </Link>
          <Link href="/nawato">
            <img src="/static/ourvision/scroll/6.jpg" alt="Nawato" />
          </Link>
          <Link href="/hype2">
            <img src="/static/ourvision/scroll/7.jpg" alt="Hype 2" />
          </Link>
          <Link href="/priscillas">
            <img src="/static/ourvision/scroll/8.jpg" alt="Priscilla's" />
          </Link>
        </OurVisionGridTemplate>
      </div>
    );
  }
}

export default OurVision;
