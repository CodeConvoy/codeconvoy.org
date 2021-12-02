import Link from 'next/link';
import Project from '../components/Project.js';
import Image from 'next/image';

import { projects } from '../data/projects.js';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>CodeConvoy</h1>
        <Image src="/img/logo.png" height="48" width="48" alt="logo.png" />
      </div>
      <hr />
      <p>Developer tools escorting you to a future in coding.</p>
      <div className={styles.links}>
        <Link href="/projects">
          <a className={styles.button}>Our Projects</a>
        </Link>
        <Link href="/mission">
          <a className={styles.button}>Our Mission</a>
        </Link>
      </div>
    </div>
  );
}
