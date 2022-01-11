import Head from 'next/head';
import CardList from '../components/Hero/CardList';
import Hero from '../components/Hero/Hero';
import TabsList from '../components/TabsList';

export default function Home() {
  const cardsData = {
    title: '¿Cómo lo hacemos realidad?',
    description:
      'Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día.',
    cards: [
      {
        title: 'Financiamiento Directo',
        description:
          'Pensado en empresas que necesiten financiar sus cuentas por cobrar o una alternativa al factoring.',
        link: '#',
        image: '/card-1.png',
      },
      {
        title: 'Pronto Pago',
        description:
          'Similar al Financiamiento Directo pero sin retención, sin costos adicionales por mora y por el 100% de tu factura.',
        link: '#',
        image: '/card-2.png',
      },
      {
        title: 'Crédito de capital',
        description:
          'Para aquellos que buscan potenciar su negocio financiando ordenes de compra o inversión en crecimiento. ',
        link: '#',
        image: '/card-3.png',
      },
      {
        title: 'Confirming',
        description:
          'Pensado para Grandes Empresas y Corporativos que necesiten extender el plazo de sus cuentas por pagar.',
        link: '#',
        image: '/card-4.png',
      },
    ],
  };
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
  return (
    <div>
      <Head>
        <title>Xepelin: Financia el Sueño de tu Empresa</title>
      </Head>
      <Hero
        title="Financia el sueño de tu empresa"
        description="Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día."
        link="#"
        image="/hero.png"
      />
      <CardList
        title={cardsData.title}
        description={cardsData.description}
        cards={cardsData.cards}
      />
      <TabsList
        title={tabsData.title}
        description={tabsData.description}
        tabs={tabsData.tabs}
      />
    </div>
  );
}
