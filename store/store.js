import { createStore } from 'redux';
import layoutReducer from '../reducers/layoutReducer';

export default () => {
  const store = createStore(layoutReducer);

  return store;
};
