import Project from '../components/Project.js';

import { projects } from '../data/projects.js';

import styles from '../styles/pages/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <hr />
      {
        projects.map((project, i) =>
          <Project {...project} key={i} />
        )
      }
      <p><b><i>+ more coming soon!</i></b></p>
    </div>
  );
}
