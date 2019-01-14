import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../components/styles/Theme';
import Nav from '../components/Nav';
import OurDesign from '../components/OurDesign';
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  overflow: scroll;
`;

const OurDesignContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.beige};
  width: ${(props) => (props.loaded ? '185%' : '50%')};
  height: 100vh;
  transition: all 1s ease-in-out;
  /* display: flex;
  flex-direction: ${(props) => (props.loaded ? 'column' : 'row')};
  justify-content: center;
  align-items: center; */
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
    ourDesignLoaded: false,
  };

  ourEyeClicked = (e) => {
    e.preventDefault();
    if (this.state.ourDesignLoaded) {
      return this.setState({
        ourEyeLoaded: true,
        ourDesignLoaded: false,
      });
    }
    this.setState({
      ourEyeLoaded: true,
    });
  };

  ourDesignClicked = (e) => {
    e.preventDefault();
    if (this.state.ourEyeLoaded) {
      return this.setState({
        ourEyeLoaded: false,
        ourDesignLoaded: true,
      });
    }
    this.setState({
      ourDesignLoaded: true,
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
          <OurDesignContainer loaded={this.state.ourDesignLoaded}>
            <PageButton
              onClick={this.ourDesignClicked}
              loaded={this.state.ourDesignLoaded}
            >
              Our Design
            </PageButton>
            {this.state.ourDesignLoaded && <OurDesign />}
          </OurDesignContainer>
        </PageContainer>
      </ThemeProvider>
    );
  }
}

export default Home;
