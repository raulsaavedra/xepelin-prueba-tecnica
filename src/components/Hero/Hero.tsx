import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { SButtonBg } from '../Base/SButton';
import { SHeadingPrimary, SText } from '../Base/STypography';
import { keyframes, styled } from '../stitches';
import {
  SPinkRhombus,
  SPinkRhombusWrapper,
  SPurpleRhombus,
  SPurpleRhombusWrapper,
  SSkinRhombus,
  SSkinRhombusWrapper,
} from './Stars';

const SHeroWrapper = styled('div', {
  display: 'grid',
  background: '$black',
  padding: '100px 0px',
  paddingTop: '120px',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '100px',
});
const SHero = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  width: '100%',
  maxWidth: '$large',
  margin: '0 auto',
  position: 'relative',
  padding: '0px 2rem',
  '@bpMd': {
    gridTemplateColumns: '1fr',
    padding: '80px 2rem',
    paddingTop: '140px',
    '> div:nth-child(2)': {
      display: 'none',
    },
  },
  '> div': {
    display: 'grid',
    gap: '20px',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    top: '-100px',
    left: '-100px',
    width: '397px',
    height: '397px',
    transform: 'translateY(-50%)',
    background: '#9469FE',
    opacity: 0.25,
    filter: 'blur(334px)',
    '@bpMd': {
      display: 'none',
    },
  },
  '&::after': {
    content: '',
    position: 'absolute',
    top: '50%',
    right: '-55%',
    width: '530px',
    height: '530px',
    transform: 'translateY(-50%)',
    background: '#FF79E0',
    opacity: 0.5,
    filter: 'blur(334px)',
    '@bpMd': {
      display: 'none',
    },
  },
});

const SHeroTitle = styled(SHeadingPrimary, {
  color: 'white',
  maxWidth: '520px',
});
const SHeroDescription = styled(SText, {
  color: 'white',
  maxWidth: '522px',
});
const SHeroCoin = styled('div', {
  position: 'absolute',
  top: '75%',
  transform: 'translateY(-75%)',
  left: '45%',
  img: {
    width: '100px',
    height: 'auto',
    backdropFilter: 'blur(66.6667px)',
  },
  mixBlendMode: 'luminosity',
  '@bpMd': {
    display: 'none',
  },
});
const SHeroImage = styled('div', {
  position: 'relative',
  '> img': {
    width: '100%',
    height: 'auto',
    marginBottom: '-100px',
  },
});
const SHeroStar = styled('div', {
  position: 'absolute',
  top: '45%',
  left: '30px',
  img: {
    width: '55px',
    height: '55px',
  },
  transform: 'translateY(-45%)',
});
interface IHeroProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Hero({ title, description, image, link }: IHeroProps) {
  return (
    <SHeroWrapper>
      <SPurpleRhombusWrapper>
        <SPurpleRhombus />
      </SPurpleRhombusWrapper>
      <SSkinRhombusWrapper>
        <SSkinRhombus />
      </SSkinRhombusWrapper>
      <SHeroCoin>
        <motion.div>
          <img src="/coin.png" alt="coin" />
        </motion.div>
      </SHeroCoin>
      <SHero>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
        >
          <SHeroTitle as="h1">{title}</SHeroTitle>
          <SHeroDescription as="p">{description}</SHeroDescription>
          <SButtonBg as="a" href={link} css={{ marginTop: '20px' }}>
            <span>Empieza a financiarte </span>
            <div className="icon">
              <MdKeyboardArrowRight />
            </div>
          </SButtonBg>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
        >
          <SHeroImage>
            <SHeroStar>
              <motion.div
                initial={{ y: -10 }}
                animate={{
                  y: 5,
                  transition: {
                    repeatType: 'reverse',
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
              >
                <img src="/star.png" />
              </motion.div>
            </SHeroStar>
            <img src={image} alt="hero" />
          </SHeroImage>
        </motion.div>
      </SHero>
      <SPinkRhombusWrapper>
        <SPinkRhombus />
      </SPinkRhombusWrapper>
    </SHeroWrapper>
  );
}
