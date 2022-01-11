import { styled } from '@stitches/react';
import Link from 'next/link';
import React from 'react';

const SHeaderWrapper = styled('div', {
  position: 'absolute',
  top: '0',
  zIndex: '10',
  width: '100%',
});
const SHeader = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr 4fr 1fr',
  maxWidth: '$extraLarge',
  margin: '0 auto',
  padding: '25px 2rem',
  position: 'relative',
  '@media (max-width: 1020px)': {
    justifyContent: 'center',
    gridTemplateColumns: '1fr',
  },
});
const SHeaderLink = styled('a', {
  fontSize: '$sm2',
  fontWeight: '400',
  color: '$white',
});
const SHeaderLinkList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  padding: '0',
  gap: '55px',
});
const SHeaderButtonGroup = styled('div', {
  display: 'flex',
  gap: '20px',
  a: {
    color: '$white',
    border: '1px solid $white',
    padding: '15px 40px',
    background: '0',
    fontSize: '$sm2',
    borderRadius: '10px',
    fontWeight: '600',
  },
  'a:nth-child(2)': {
    background: '$white',
    color: '$transparent',
  },
});
export default function Header() {
  return (
    <SHeaderWrapper>
      <SHeader>
        <div>
          <img src="/logo.svg" />
        </div>
        <SHeaderLinkList>
          <Link passHref href="#">
            <SHeaderLink>Soluciones</SHeaderLink>
          </Link>
          <Link passHref href="#">
            <SHeaderLink>Sobre nosotros</SHeaderLink>
          </Link>
          <Link passHref href="#">
            <SHeaderLink>Recursos</SHeaderLink>
          </Link>
          <Link passHref href="#">
            <SHeaderLink>Job Board</SHeaderLink>
          </Link>
        </SHeaderLinkList>
        <div>
          <SHeaderButtonGroup>
            <a href="#">Ingresar</a>
            <a href="#">Regístrate</a>
          </SHeaderButtonGroup>
        </div>
      </SHeader>
    </SHeaderWrapper>
  );
}
