import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import theme from '../components/styles/Theme';
import Nav from '../components/Nav';
import OurVision from '../components/OurVision';
import OurEye from '../components/OurEye';

const PageContainer = styled.div`
  position: relative;
  display: flex;
`;

const OurEyeContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offwhite};
  width: ${(props) => (props.loaded ? '185%' : '50%')};
  height: 100vh;
  transition: all 1s ease-in-out;
  overflow: scroll;
`;

const OurVisionContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.beige};
  width: ${(props) => (props.loaded ? '185%' : '50%')};
  height: 100vh;
  transition: all 1s ease-in-out;
  overflow: scroll;
`;

const PageButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: none;
  font-family: ${(props) =>
    props.loaded ? 'Suisse Works Book' : 'Suisse Intl Regular'};
  font-size: 3rem;
  cursor: pointer;
  outline: none;
`;

export class Home extends Component {
  state = {
    ourEyeLoaded: false,
    ourVisionLoaded: false,
  };

  ourEyeClicked = (e) => {
    e.preventDefault();
    if (this.state.ourVisionLoaded) {
      return this.setState({
        ourEyeLoaded: true,
        ourVisionLoaded: false,
      });
    }
    this.setState({
      ourEyeLoaded: true,
    });
  };

  ourVisionClicked = (e) => {
    e.preventDefault();
    if (this.state.ourEyeLoaded) {
      return this.setState({
        ourEyeLoaded: false,
        ourVisionLoaded: true,
      });
    }
    this.setState({
      ourVisionLoaded: true,
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Nav />
          <OurEyeContainer loaded={this.state.ourEyeLoaded}>
            <PageButton
              onClick={this.ourEyeClicked}
              loaded={this.state.ourEyeLoaded}
            >
              Our Eye
            </PageButton>
            {this.state.ourEyeLoaded && <OurEye />}
          </OurEyeContainer>
          <OurVisionContainer loaded={this.state.ourVisionLoaded}>
            <PageButton
              onClick={this.ourVisionClicked}
              loaded={this.state.ourVisionLoaded}
            >
              Our Vision
            </PageButton>
            {this.state.ourVisionLoaded && <OurVision />}
          </OurVisionContainer>
        </PageContainer>
      </ThemeProvider>
    );
  }
}

export default Home;
