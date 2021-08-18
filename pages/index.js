import Link from 'next/link';
import Project from '../components/Project.js';
import Image from 'next/image';

import { projects } from '../data/projects.js';
import { outLink } from '../util/outLink.js';

import styles from '../styles/Index.module.css';

export default function Index() {
  return (
    <>
      <div className={styles.title}>
        <h1>CodeConvoy</h1>
        <Image src="/logo.png" height="48" width="48" alt="logo" />
      </div>
      <hr />
      <p>Escorting you to a future in coding.</p>
      <Link href="/projects">
        <a className={styles.button}>Our Projects</a>
      </Link>
      <Link href="/about">
        <a className={styles.button}>About Us</a>
      </Link>
    </>
  );
}
