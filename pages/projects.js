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
      <p className={styles.more}>+ more coming soon!</p>
    </div>
  );
}
