import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SGrid } from './Base/SLayout';
import { SText } from './Base/STypography';
import { styled } from './stitches';

const SFooterWrapper = styled('div', {
  background: '$black',
  position: 'relative',
});
const SFooter = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'flex-start',
  margin: '0 auto',
  maxWidth: '$large',
  padding: '80px 2rem',
  '@bpMd': {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
});
const SFooterLink = styled(SText, {
  fontSize: '12px',
  color: '$white',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: '$orange',
  },
});
const SFooterLeft = styled('div', {
  display: 'grid',
  gap: '20px',
  alignItems: 'flex-start',
});
const SFooterRight = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyItems: 'flex-end',
  gap: '40px 20px',
  alignItems: 'flex-start',
  '@bpMd': {
    justifyItems: 'flex-start',
    gridTemplateColumns: '1fr 1fr',
  },
});
const SFooterBottom = styled('div', {
  display: 'grid',
  width: '100%',
  gridColumn: '1 / -1',
  '&:before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '3px',
    marginTop: '80px',
    background:
      'linear-gradient(93.31deg, #B494FF 0%, #FF79E0 48.96%, #FFBEA7 93.23%)',
  },
});
const SFooterIconList = styled('ul', {
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  padding: '0',
  margin: '0',
});
const SFooterIcon = styled('div', {
  display: 'grid',
  alignItems: 'center',
  background: 'white',
  color: '$black',
  padding: '5px',
  borderRadius: '7px',
  fontSize: '20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: '$orange',
  },
});
export default function Footer() {
  return (
    <SFooterWrapper>
      <SFooter>
        <SFooterLeft>
          <img src="/logo.svg" alt="logo" />
          <SText
            css={{
              fontSize: '$sm2',
              color: '$white',
              maxWidth: '365px',
              fontWeight: '300',
            }}
          >
            Soñamos con un mercado en donde no existan barreras de entradas para
            el financiamiento de las pymes en Latinoamérica.{' '}
          </SText>
        </SFooterLeft>
        <SFooterRight>
          <SGrid css={{ alignItems: 'flex-start', gap: '10px' }}>
            <SFooterLink
              as="h4"
              css={{ fontWeight: '600', marginBottom: '4px' }}
            >
              Soluciones
            </SFooterLink>
            <Link href="#" passHref>
              <SFooterLink as="a">Financiamiento Directo</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Pronto Pago</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Credito de Capital</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Confirming</SFooterLink>
            </Link>
          </SGrid>
          <SGrid css={{ alignItems: 'flex-start', gap: '10px' }}>
            <SFooterLink
              as="h4"
              css={{ fontWeight: '600', marginBottom: '4px' }}
            >
              Explorar
            </SFooterLink>
            <Link href="#" passHref>
              <SFooterLink as="a">Sobre Nosotros</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Testimonios</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Noticias</SFooterLink>
            </Link>
            <Link href="#" passHref>
              <SFooterLink as="a">Blog</SFooterLink>
            </Link>
          </SGrid>
          <SGrid css={{ '@bpMd': { width: '100%' } }}>
            <SFooterLink as="h4" css={{ marginBottom: '14px' }}>
              Siguenos
            </SFooterLink>
            <SFooterIconList>
              <Link href="#" passHref>
                <SFooterIcon as="a">
                  <FaFacebookF />
                </SFooterIcon>
              </Link>
              <Link href="#" passHref>
                <SFooterIcon as="a">
                  <FaLinkedinIn />
                </SFooterIcon>
              </Link>
              <Link href="#" passHref>
                <SFooterIcon as="a">
                  <FaTwitter />
                </SFooterIcon>
              </Link>
            </SFooterIconList>
          </SGrid>
        </SFooterRight>
        <SFooterBottom>
          <SText
            css={{
              fontSize: '12px',
              color: 'white',
              textAlign: 'center',
              marginTop: '20px',
              b: {
                fontWeight: '600',
              },
            }}
          >
            <b>© 2022 Xepelin</b> Con amor para las pymes
          </SText>
        </SFooterBottom>
      </SFooter>
    </SFooterWrapper>
  );
}
