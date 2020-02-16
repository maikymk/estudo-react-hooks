import { createStore } from 'redux';

import countReducer from '../components/Count/reducers';

const store = createStore(countReducer);

export default store;
