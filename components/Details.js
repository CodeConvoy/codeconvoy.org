import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

import styles from '../styles/components/Details.module.css';

export default function Details() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/img/logo.png" width="48" height="48" alt="logo.png" />
          </a>
        </Link>
        <span className={styles.flexfill} />
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link href="/mission">
          <a className={styles.link}>Mission</a>
        </Link>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy;{' '}
          <a href="https://codeconvoy.org">CodeConvoy</a>
          {' '}{new Date().getFullYear()}
        </p>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/codeconvoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://twitter.com/codeconvoyorg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a href="mailto:contact@codeconvoy.org">
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </>
  );
}
