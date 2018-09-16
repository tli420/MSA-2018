import * as React from 'react';

export const themes = {
  blue: {
    background: 'rgb(53, 55, 180)',
  },
  dark: {
    background: '#222222',
  },
};
export const ThemeContext = React.createContext({
  theme: themes.dark
});