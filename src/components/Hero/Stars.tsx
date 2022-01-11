import { styled } from '../stitches';

export const SPurpleRhombusWrapper = styled('div', {
  position: 'absolute',
  bottom: '50px',
  left: '15%',
  marginBottom: '25px',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '30px',
    height: '100px',
    marginTop: '-15px',
    transform: 'rotate(180deg)',
    opacity: '0.2',
    background:
      'linear-gradient(180deg, rgba(148, 105, 254, 0.1) 0%, #9469FE 100%)',
  },
});
export const SPurpleRhombus = styled('div', {
  position: 'relative',
  background: '#9469FE',
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  width: '30px',
  height: '30px',
});
export const SPinkRhombusWrapper = styled('div', {
  position: 'absolute',
  bottom: '100px',
  right: '250px',
  '@bpMd': {
    right: '150px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-40px',
    right: '-75px',
    width: '40px',
    height: '150px',
    marginTop: '-15px',
    transform: 'rotate(90deg)',
    opacity: '0.2',
    background:
      'linear-gradient(180deg, rgba(255, 121, 224, 0) 0%, #FF79E0 100%)',
  },
});
export const SPinkRhombus = styled('div', {
  position: 'relative',
  background: '#FF79E0',
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  width: '40px',
  height: '40px',
});

export const SSkinRhombusWrapper = styled('div', {
  position: 'absolute',
  top: '75px',
  right: '42%',
  marginBottom: '25px',
  transform: 'rotate(180deg)',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '25px',
    height: '100px',
    marginTop: '-15px',
    transform: 'rotate(180deg)',
    opacity: '0.2',
    background:
      'linear-gradient(180deg, rgba(255, 190, 167, 0) 0%, #FFBEA7 100%)',
  },
});
export const SSkinRhombus = styled('div', {
  position: 'relative',
  background: '#FFBEA7',
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  width: '25px',
  height: '25px',
});
