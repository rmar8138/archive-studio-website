import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import Nav from './Nav';
import OurDesign from './OurDesign';
import OurEye from './OurEye';

// const PageContainer = styled.div`
//   display: flex;
// `;

// const OurEyeContainer = styled.div`
//   background-color: ${(props) => props.theme.offwhite};
//   width: ${(props) => (props.loaded ? '185%' : '50%')};
//   height: 100vh;
//   transition: all 1s ease-in-out;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const OurDesignContainer = styled.div`
//   background-color: ${(props) => props.theme.beige};
//   width: ${(props) => (props.loaded ? '185%' : '50%')};
//   height: 100vh;
//   transition: all 1s ease-in-out;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PageButton = styled.button`
//   border: none;
//   background: none;
//   font-family: ${(props) =>
//     props.loaded ? 'Suisse Works Book' : 'Suisse Intl Regular'};
//   font-size: 3rem;
//   cursor: pointer;
//   outline: none;
// `;

export class Page extends Component {
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
        {/* <PageContainer>
          <Meta />
          <GlobalStyle />
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
        </PageContainer> */}
        <div>
          <Meta />
          <GlobalStyle />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
