import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_THEME } from '../store';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const handleToggle = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      <h1>Theme Switcher</h1>
      <label>
        Toggle Theme
        <input type="checkbox" checked={theme === 'dark'} onChange={handleToggle} />
      </label>
    </div>
  );
};

export default ThemeToggle;
