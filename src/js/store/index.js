import {createStore } from 'redux';
import rootReducer from '../reducers/index.ts';

const store = createStore(rootReducer);
window.store = store;

export default store;