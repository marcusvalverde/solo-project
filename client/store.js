import { createStore } from 'redux';
import reducers from './reducers/reducerIndex';
import { composeWithDevTools } from 'redux-devtools-extension'; // Middleware cant see redux dev tools without it

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;