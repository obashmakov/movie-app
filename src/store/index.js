import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/rootReducer';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
));
