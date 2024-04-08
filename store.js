import { createStore } from 'redux';

// Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Initial State
const initialState = {
  theme: 'light' // начальная тема (светлая)
};

// Reducer
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Store
const store = createStore(themeReducer);

export default store;
