import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, keyframes, globalCss } = createStitches(
  {
    theme: {
      colors: {
        white: '#FFFFFF',
        purple: '#7847F2',
        black: '#141531',
        green: '#99D5AA',
        orange: '#EA8432',
        gray: '#9A9A9A',
      },
      fontSizes: {
        xs: '10px',
        sm: '13px',
        sm2: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '40px',
        '2xlm': '24px',
        '3xl': '58px',
        '3xlm': '36px',
      },
      sizes: {
        extraSmall: '425px',
        small: '640px',
        medium: '1020px',
        large: '1200px',
        extraLarge: '1440px',
      },
      shadows: {
        normal: '0 12px 24px 0 rgba(0,0,0,0.09)',
      },
    },
    media: {
      bpLg: '(max-width: 1200px)',
      bpMd: '(max-width: 1020px)',
      bpSm: '(max-width: 640px)',
      bpExSm: '(max-width: 425px)',
    },
  }
);
