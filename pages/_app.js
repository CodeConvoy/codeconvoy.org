import Details from '../components/Details.js';
import Head from 'next/head';

import styles from '../styles/pages/App.module.css';
import '../styles/globals.css';

// meta
const title = "CodeConvoy";
const url = "https://codetrain.org";
const description = "Developer tools escorting you to a future in coding.";
const image = "https://codeconvoy.org/img/cover.png";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        {/* general */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* links */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;800&display=swap" rel="stylesheet" />
        <link rel="canonical" href={url} />
        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@CodeConvoyOrg" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className={styles.container}>
        <Details />
        <Component {...pageProps} />
      </div>
    </>
  );
}
