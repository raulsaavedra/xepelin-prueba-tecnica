import * as Tabs from '@radix-ui/react-tabs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { SButtonBg } from './Base/SButton';
import { SBox, SContainer, SFlex, SGrid } from './Base/SLayout';
import SectionNav from './SectionNav';
import { keyframes, styled } from './stitches';
import { SHeadingFourth, SHeadingTertiary } from './Base/STypography';

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
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '20px 20px',
  background: '0',
  border: '0',
  borderRadius: '20px',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
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
export default function TabsList() {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const tabsData = {
    title: '¿Qué dicen nuestros clientes?',
    description:
      'La Fintech chilena especializada en servicios financieros para pequeñas y medianas empresas en Latinoamérica.',
    tabs: [
      {
        title: 'Andrés Rosales',
        subtitle: 'Gerente Spa',
        image: '/tabs-1.jpg',
        content: {
          title: 'La mejor experiencia 1',
          stars: 5,
          link: '#',
          description: `<p>&ldquo;En un principio hab&iacute;amos pensado en acudir a alg&uacute;n banco, pero el problema es que necesit&aacute;bamos una serie de documentos y tr&aacute;mites, pero no nos daba el tiempo, por eso tambi&eacute;n estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permiti&oacute; pagar sueldos, cotizaciones e impuestos al d&iacute;a, adem&aacute;s de comprar materiales.&rdquo;</p>
          <p><br></p>
          <p>Con tan solo 7 meses de funcionamiento a toda m&aacute;quina, la empresa de soluciones de acero SACER ha sabido c&oacute;mo lidiar con las dificultades que conlleva el emprender con un negocio de manera aut&oacute;noma</p>`,
        },
      },
      {
        title: 'Carlos Zapata',
        subtitle: 'Gerente general de Zapata Ltda',
        image: '/tabs-2.jpg',
        content: {
          title: 'La mejor experiencia 2',
          stars: 5,
          link: '#',
          description: `<p>&ldquo;En un principio hab&iacute;amos pensado en acudir a alg&uacute;n banco, pero el problema es que necesit&aacute;bamos una serie de documentos y tr&aacute;mites, pero no nos daba el tiempo, por eso tambi&eacute;n estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permiti&oacute; pagar sueldos, cotizaciones e impuestos al d&iacute;a, adem&aacute;s de comprar materiales.&rdquo;</p>
          <p><br></p>
          <p>Con tan solo 7 meses de funcionamiento a toda m&aacute;quina, la empresa de soluciones de acero SACER ha sabido c&oacute;mo lidiar con las dificultades que conlleva el emprender con un negocio de manera aut&oacute;noma</p>`,
        },
      },
      {
        title: 'Carlos Zapata',
        subtitle: 'Gerente general de Zapata Ltda',
        image: '/tabs-3.jpg',
        content: {
          title: 'La buena experiencia 3',
          stars: 4,
          link: '#',
          description: `<p>&ldquo;En un principio hab&iacute;amos pensado en acudir a alg&uacute;n banco, pero el problema es que necesit&aacute;bamos una serie de documentos y tr&aacute;mites, pero no nos daba el tiempo, por eso tambi&eacute;n estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permiti&oacute; pagar sueldos, cotizaciones e impuestos al d&iacute;a, adem&aacute;s de comprar materiales.&rdquo;</p>
          <p><br></p>
          <p>Con tan solo 7 meses de funcionamiento a toda m&aacute;quina, la empresa de soluciones de acero SACER ha sabido c&oacute;mo lidiar con las dificultades que conlleva el emprender con un negocio de manera aut&oacute;noma</p>`,
        },
      },
    ],
  };
  const [currentTab, setCurrentTab] = useState('tab0');
  return (
    <STabsWrapper>
      <SContainer>
        <SectionNav title={tabsData.title} description={tabsData.description} />
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
              {tabsData.tabs.map((tab, index) => (
                <STabsCard
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
            {tabsData.tabs.map((tab, index) => (
              <Tabs.Content value={`tab${index}`}>
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
