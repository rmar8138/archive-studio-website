import App, { Container } from 'next/app';
import MyContext from '../context';
import Page from '../components/Page';

class MyApp extends App {
  componentDidMount() {
    console.log(this.props.Component);
  }

  render() {
    const { Component } = this.props;

    return (
      <MyContext.Provider
        value={{
          Component: Component,
        }}
      >
        <Container>
          <Page>
            <Component />
          </Page>
        </Container>
      </MyContext.Provider>
    );
  }
}

export default MyApp;
