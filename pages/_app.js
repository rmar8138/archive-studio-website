import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../store/store';
import MyContext from '../context';
import Page from '../components/Page';
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

class MyApp extends App {
  componentDidMount() {
    console.log(this.props.Component);
  }

  render() {
    const { Component, store } = this.props;

    return (
      <Provider store={store}>
        <Container>
          <Page>
            <Component />
          </Page>
        </Container>
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
