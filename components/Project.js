import { outLink } from '../util/outLink.js';

import styles from '../styles/Project.module.css';

export default function Project(props) {
  const { title, description, link, github } = props;

  return (
    <div className={styles.container}>
      <p><b>{title}</b></p>
      <p>{description}</p>
      <a href={`https://${link}`} {...outLink}>{link}</a>
      <a href={`https://github.com/${github}`} {...outLink}>github</a>
    </div>
  );
}
