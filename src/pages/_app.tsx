import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Page from '../components/Page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <NextNProgress color="red" />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
