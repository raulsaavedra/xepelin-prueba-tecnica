import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react'; // eslint-disable-line import/no-unresolved
import 'swiper/css'; // eslint-disable-line import/no-unresolved
import 'swiper/css/pagination'; // eslint-disable-line import/no-unresolved

import SwiperCore, { Pagination } from 'swiper';

import { SButton } from '../Base/SButton';
import { SAbsoluteLink, SBox, SContainer, SGrid } from '../Base/SLayout';

import {
  SHeadingFourth,
  SHeadingSecondary,
  SHeadingTertiary,
  SText,
} from '../Base/STypography';
import { styled } from '../stitches';
import SectionNav from '../SectionNav';

SwiperCore.use([Pagination]);

interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}
interface CardListProps {
  title: string;
  description: string;
  cards: Card[];
}
const SCardList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '25px',
  paddingBottom: '125px',
  marginBottom: '15px',
  '@bpMd': {
    gridTemplateColumns: '1fr',
    display: 'none',
  },
});
const SCard = styled('div', {
  position: 'relative',
  display: 'grid',
  alignItems: 'flex-start',
  gridTemplateRows: 'auto auto 1fr auto',
  gap: '18px',
  padding: '35px 20px',
  transition: 'all 0.4s ease',
  borderRadius: '20px',
  '&:hover': {
    boxShadow: '0px 4px 40px rgba(76, 78, 155, 0.08)',
    img: {
      transform: 'scale(1.1)',
    },
  },
  img: {
    maxWidth: '150px',
    height: 'auto',
    margin: '0 auto',
    marginBottom: '10px',
    transition: 'all 0.4s ease',
  },
});

export const SGreenRhombusWrapper = styled('div', {
  position: 'absolute',
  bottom: '50px',
  right: '300px',
  '@bpMd': {
    display: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-168px',
    right: '-200px',
    width: '35px',
    height: '400px',
    marginTop: '-15px',
    transform: 'rotate(90deg)',
    opacity: '0.2',
    background:
      'linear-gradient(180deg, rgba(153, 213, 170, 0.3) 0%, #99D5AA 100%);',
  },
});
export const SGreenRhombus = styled('div', {
  position: 'relative',
  background: ' #99D5AA',
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  width: '35px',
  height: '35px',
});

export const SOrangeRhombusWrapper = styled('div', {
  position: 'absolute',
  bottom: '10px',
  left: '140px',
  '@bpMd': {
    display: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-123px',
    left: '-152px',
    width: '25px',
    height: '300px',
    marginTop: '-15px',
    transform: 'rotate(270deg)',
    opacity: '0.2',
    background:
      'linear-gradient(180deg, rgba(233, 148, 79, 0) 0%, #E9944F 100%)',
  },
});
export const SOrangeRhombus = styled('div', {
  position: 'relative',
  background: '#E9944F',
  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  width: '25px',
  height: '25px',
});

const SCardSlider = styled('div', {
  display: 'none',
  paddingBottom: '75px',
  '@bpMd': {
    display: 'block',
  },
});
export default function CardList({ title, description, cards }: CardListProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <SBox css={{ overflow: 'hidden', position: 'relative' }}>
      <SContainer ref={ref}>
        <SectionNav title={title} description={description} />
        <SCardList>
          {cards.map((card, index) => (
            <motion.div
              key={`card${index}`}
              initial={{ opacity: 0, y: 75 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 75,
                transition: { duration: 0.4, delay: index * 0.1 },
              }}
            >
              <SCard key={card.title}>
                <img src={card.image} alt={card.title} />
                <SHeadingFourth css={{ textAlign: 'center' }}>
                  {card.title}
                </SHeadingFourth>
                <SText css={{ fontSize: '$sm', textAlign: 'center' }}>
                  {card.description}
                </SText>
                <SGrid css={{ justifyContent: 'center' }}>
                  <SButton>
                    <span>Explorar</span>
                    <div className="icon">
                      <MdKeyboardArrowRight />
                    </div>
                  </SButton>
                </SGrid>
                <SAbsoluteLink href={card.link} />
              </SCard>
            </motion.div>
          ))}
        </SCardList>
        {inView && (
          <>
            <motion.div
              initial={{ x: 680 }}
              animate={{ x: -1500, transition: { duration: 2, delay: 0.6 } }}
            >
              <SGreenRhombusWrapper>
                <SGreenRhombus />
              </SGreenRhombusWrapper>
            </motion.div>
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 1600, transition: { duration: 2, delay: 0.6 } }}
            >
              <SOrangeRhombusWrapper>
                <SOrangeRhombus />
              </SOrangeRhombusWrapper>
            </motion.div>
          </>
        )}
        <SCardSlider>
          <Swiper
            pagination
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cards.map((card, index) => (
              <SwiperSlide>
                <SCard key={card.title}>
                  <img src={card.image} alt={card.title} />
                  <SHeadingFourth css={{ textAlign: 'center' }}>
                    {card.title}
                  </SHeadingFourth>
                  <SText css={{ fontSize: '$sm', textAlign: 'center' }}>
                    {card.description}
                  </SText>
                  <SGrid css={{ justifyContent: 'center' }}>
                    <SButton>
                      <span>Explorar</span>
                      <div className="icon">
                        <MdKeyboardArrowRight />
                      </div>
                    </SButton>
                  </SGrid>
                  <SAbsoluteLink href={card.link} />
                </SCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SCardSlider>
      </SContainer>
    </SBox>
  );
}
