import Project from '../components/Project.js';

import { projects } from '../data/projects.js';

import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <hr className={styles.hr} />
      {
        projects.map((project, i) =>
          <Project {...project} key={i} />
        )
      }
      <p><b><i>+ more coming soon!</i></b></p>
    </>
  );
}
