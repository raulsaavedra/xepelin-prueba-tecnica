import { styled } from '../stitches';

export const SButtonBg = styled('button', {
  display: 'grid',
  alignItems: 'center',
  background:
    'linear-gradient(93.31deg, #9469FE 0%, #FF79E0 48.96%, #FFBEA7 93.23%)',
  padding: '20px 25px',
  paddingRight: '90px',
  position: 'relative',
  lineHeight: '1.4',
  width: 'fit-content',
  minWidth: '250px',
  border: '0',
  borderRadius: '8px',
  transition: 'all 0.4s ease',
  overflow: 'hidden',
  cursor: 'pointer',

  span: {
    position: 'relative',
    fontSize: '15px',
    fontWeight: '600',
    color: '$white',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    width: '0',
    height: '100%',
    background: '$purple',
    transition: 'all 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
  '.icon': {
    display: 'grid',
    alignItems: 'center',
    position: 'absolute',
    color: '$white',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0',
    width: 'auto',
    height: '100%',
    fontSize: '30px',
    padding: '0px 15px',
    background: 'rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s ease',
  },
  variants: {
    orange: {
      true: {
        background: '#E9944F',
        '&::before': {
          background: '$orange',
          transition: 'all 0.4s ease',
        },
        '.icon': {
          background: '$orange',
        },
      },
    },
  },
});

export const SButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  border: 0,
  background: 0,
  span: {
    color: '$purple',
    fontWeight: '600',
    fontSize: '$sm',
  },
  '.icon': {
    display: 'grid',
    alignItems: 'center',
    fontSize: '$lg',
    color: '$purple',
  },
});
