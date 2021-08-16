import Head from 'next/head';

import '../styles/globals.css';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>CodeConvoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
