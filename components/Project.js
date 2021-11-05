import Image from 'next/image';

import { outLink } from '../util/outLink.js';

import styles from '../styles/Project.module.css';

export default function Project(props) {
  const { title, description, link, github, image } = props;

  return (
    <div className={styles.container}>
      <h2>
        <b>{title}</b>
        {' '}
        <Image
          src={`/img/projects/${image}`}
          width="32"
          height="32"
          alt={image}
        />
      </h2>
      <p>{description}</p>
      <a href={`https://${link}`} {...outLink}>{link}</a>
      <a href={`https://github.com/${github}`} {...outLink}>github</a>
    </div>
  );
}
