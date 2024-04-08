import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';

export const TOGGLE_THEME = 'TOGGLE_THEME';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
