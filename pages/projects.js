import Project from '../components/Project.js';

import { projects } from '../data/projects.js';

import styles from '../styles/pages/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <hr />
      <div className={styles.projects}>
        {
          projects.map((project, i) =>
            <Project {...project} key={i} />
          )
        }
      </div>
      <a
        className={styles.more}
        href="https://github.com/codeconvoy"
        target="_blank"
        rel="noopener noreferrer"
      >+ more coming soon!</a>
    </div>
  );
}
