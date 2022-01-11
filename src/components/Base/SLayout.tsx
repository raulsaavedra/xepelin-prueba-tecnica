import { styled } from '../stitches';

export const SContainer = styled('div', {
  maxWidth: '$large',
  margin: '0 auto',
  padding: '0rem 2rem',
  position: 'relative',
});

export const SGrid = styled('div', {
  display: 'grid',
  position: 'relative',
});

export const SFlex = styled('div', {
  display: 'flex',
  position: 'relative',
});

export const SAbsoluteLink = styled('a', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

export const SBox = styled('div', {
  position: 'relative',
});
