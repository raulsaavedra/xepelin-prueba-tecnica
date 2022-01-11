import * as Tabs from '@radix-ui/react-tabs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { SButtonBg } from './Base/SButton';
import { SBox, SContainer, SFlex, SGrid } from './Base/SLayout';
import SectionNav from './SectionNav';
import { keyframes, styled } from './stitches';
import { SHeadingFourth, SHeadingTertiary, SText } from './Base/STypography';

const STabsWrapper = styled('div', {
  background: '#fafafa',
  padding: '80px 0px',
  overflow: 'hidden',
});
const STabsRoot = styled(Tabs.Root, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'flex-start',
  padding: '60px 0px',
  '@bpMd': {
    gridTemplateColumns: '1fr',
  },
});
const STabsList = styled(Tabs.List, {
  display: 'grid',
  gap: '20px',
});

const STabsCard = styled(Tabs.Trigger, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gap: '20px',
  padding: '20px 20px',
  background: '0',
  border: '0',
  borderRadius: '20px',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '@bpMd': {
    background: 'white',
  },
  variants: {
    active: {
      true: {
        boxShadow: '0px 4px 40px rgba(76, 78, 155, 0.08)',
        background: 'white',
      },
    },
  },
  img: {
    maxWidth: '70px',
    borderRadius: '100%',
  },
  '&:hover': {
    boxShadow: '0px 4px 40px rgba(76, 78, 155, 0.08)',
    background: 'white',
  },
});
const STabsCardFooter = styled('div', {
  display: 'none',
  '@bpMd': {
    gridColumn: '1 / -1',
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '> div': {
      display: 'grid',
      gap: '10px',
    },
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
const STabsContent = styled('div', {
  display: 'grid',
  gap: '20px',
  animationFillMode: 'backwards',
  animation: `${fadeIn} 0.4s ease-in-out`,
});
interface Tab {
  title: string;
  subtitle: string;
  image: string;
  content: {
    title: string;
    description: string;
    link: string;
    stars: number;
  };
}
interface TabsListProps {
  title: string;
  description: string;
  tabs: Tab[];
}

export default function TabsList({ title, description, tabs }: TabsListProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [currentTab, setCurrentTab] = useState('tab0');
  return (
    <STabsWrapper>
      <SContainer>
        <SectionNav title={title} description={description} />
        <STabsRoot
          ref={ref}
          value={currentTab}
          onValueChange={(value) => setCurrentTab(value)}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView ? 0 : -100,
              opacity: inView ? 1 : 0,
              transition: { duration: 0.7 },
            }}
          >
            <STabsList aria-label="tabs example">
              {tabs.map((tab, index) => (
                <STabsCard
                  key={`tab${index}`}
                  value={`tab${index}`}
                  active={currentTab === `tab${index}`}
                >
                  <div>
                    <img src={tab.image} alt={tab.title} />
                  </div>
                  <SGrid css={{ gap: '5px' }}>
                    <SHeadingFourth
                      css={{ fontWeight: '400', textAlign: 'left' }}
                    >
                      {tab.title}
                    </SHeadingFourth>
                    <SHeadingFourth
                      css={{
                        textAlign: 'left',
                        fontSize: '$md',
                        fontWeight: '300',
                        color: '$gray',
                      }}
                    >
                      {tab.subtitle}
                    </SHeadingFourth>
                  </SGrid>
                  <STabsCardFooter>
                    <div>
                      <SText
                        css={{
                          fontSize: '$sm2',
                          fontWeight: '600',
                          color: '$black',
                        }}
                      >
                        {tab.content.title}
                      </SText>
                      <SFlex css={{ gap: '10px' }}>
                        {[...Array(tab.content.stars)].map((_, i) => (
                          <div key={i}>
                            <img src="/tabs-star.png" alt="star" />
                          </div>
                        ))}
                      </SFlex>
                    </div>
                    <div>
                      <SGrid
                        css={{
                          alignItems: 'center',
                          padding: '10px 10px',
                          background: '$orange',
                          fontSize: '25px',
                          borderRadius: '10px',
                          color: '$white',
                        }}
                      >
                        <MdKeyboardArrowRight />
                      </SGrid>
                    </div>
                  </STabsCardFooter>
                </STabsCard>
              ))}
            </STabsList>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: inView ? 0 : 100,
              opacity: inView ? 1 : 0,
              transition: { duration: 0.7 },
            }}
          >
            {tabs.map((tab, index) => (
              <Tabs.Content key={`tabcontent${index}`} value={`tab${index}`}>
                <STabsContent>
                  <SHeadingTertiary>{tab.content.title}</SHeadingTertiary>
                  <SFlex css={{ gap: '10px' }}>
                    {[...Array(tab.content.stars)].map((_, i) => (
                      <div key={i}>
                        <img src="/tabs-star.png" alt="star" />
                      </div>
                    ))}
                  </SFlex>
                  <SBox
                    css={{
                      fontSize: '14px',
                      lineHeight: '32px',
                      maxWidth: '530px',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: tab.content.description,
                    }}
                  />
                  <SButtonBg
                    as="a"
                    href={tab.content.link}
                    css={{ marginTop: '20px' }}
                    orange
                  >
                    <span>Conoce más</span>
                    <div className="icon">
                      <MdKeyboardArrowRight />
                    </div>
                  </SButtonBg>
                </STabsContent>
              </Tabs.Content>
            ))}
          </motion.div>
        </STabsRoot>
      </SContainer>
    </STabsWrapper>
  );
}
