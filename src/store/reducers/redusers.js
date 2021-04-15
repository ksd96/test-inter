import { combineReducers } from 'redux';
import reducerCards from './reducerCards';

const reducers = combineReducers({
  cards: reducerCards
});

export default reducers;
