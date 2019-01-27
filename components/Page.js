import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

export class Page extends Component {
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
