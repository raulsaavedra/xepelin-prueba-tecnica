import Link from 'next/link';
import React from 'react';
import { MdClose, MdOutlineMenu } from 'react-icons/md';
import { keyframes, styled } from './stitches';

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
  gap: '30px',
  '@bpMd': {
    justifyContent: 'center',
  },
});
const SHeaderLogo = styled('div', {
  '@bpMd': {
    img: {
      maxWidth: '90px',
    },
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
  variants: {
    desktop: {
      true: {
        '@bpMd': {
          display: 'none',
        },
      },
    },
    mobile: {
      true: {
        padding: '0',
        marginTop: '75px',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        a: {
          textAlign: 'left',
          width: '100%',
        },
      },
    },
  },
});
const SHeaderButtonGroup = styled('div', {
  display: 'flex',
  gap: '20px',

  variants: {
    desktop: {
      true: {
        '@bpMd': {
          display: 'none',
        },
      },
    },
    mobile: {
      true: {
        marginTop: '20px',
        flexDirection: 'column',
        a: {
          display: 'grid',
          width: '200px',
          justifyContent: 'center',
          margin: '0 auto',
        },
      },
    },
  },
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
const SHeaderToggleMobile = styled('button', {
  border: 0,
  background: '0',
  color: '$white',
  fontSize: '30px',
  display: 'none',
  '@bpMd': {
    display: 'grid',
  },
});
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
const SHeaderMobileWrapper = styled('div', {
  padding: '0rem 2rem',
  background: '$black',
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '10',
  animation: `${fadeIn} 0.3s ease-in-out`,
});
const SHeaderMobileClose = styled('button', {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: '0',
  border: '0',
  color: '$white',
  fontSize: '35px',
});
const SHeaderMobile = styled('div', {
  position: 'relative',
  display: 'grid',
  gap: '20px',
  justifyContent: 'flex-start',
});
export default function Header() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <SHeaderWrapper>
        <SHeader>
          <SHeaderLogo>
            <img src="/logo.svg" />
          </SHeaderLogo>
          <div>
            <SHeaderLinkList desktop>
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
          </div>
          <div>
            <SHeaderButtonGroup desktop>
              <a href="#">Ingresar</a>
              <a href="#">Regístrate</a>
            </SHeaderButtonGroup>
            <SHeaderToggleMobile onClick={() => setShowModal(true)}>
              <MdOutlineMenu />
            </SHeaderToggleMobile>
          </div>
        </SHeader>
      </SHeaderWrapper>
      {showModal && (
        <SHeaderMobileWrapper>
          <SHeaderMobile>
            <SHeaderLinkList mobile>
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
            <SHeaderButtonGroup mobile>
              <a href="#">Ingresar</a>
              <a href="#">Regístrate</a>
            </SHeaderButtonGroup>
          </SHeaderMobile>
          <SHeaderMobileClose onClick={() => setShowModal(false)}>
            <MdClose />
          </SHeaderMobileClose>
        </SHeaderMobileWrapper>
      )}
    </>
  );
}
