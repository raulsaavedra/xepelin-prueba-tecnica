import React, { ReactNode } from 'react';

import { globalCss } from './stitches';
import Header from './Header';

const SGlobal = globalCss({
  html: {
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1.5rem',
  },
  a: {
    textDecoration: 'none',
  },
  button: {
    fontFamily: 'Poppins',
  },
  h1: {
    padding: 0,
    margin: 0,
  },
  h2: {
    padding: 0,
    margin: 0,
  },
  h3: {
    padding: 0,
    margin: 0,
  },
  h4: {
    padding: 0,
    margin: 0,
  },
  p: {
    padding: 0,
    margin: 0,
  },
});
export default function Page({ children }: { children: ReactNode }) {
  SGlobal();
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
