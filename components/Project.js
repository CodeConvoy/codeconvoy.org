import styles from '../styles/components/Project.module.css';

export default function Project(props) {
  const { title, description, link, github, image } = props;

  return (
    <div className={styles.container}>
      <h2>
        <img
          src={`/img/logos/${image}`}
          width="32"
          height="32"
          alt={image}
        />
        <b>{title}</b>
      </h2>
      <a
        className={styles.image}
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`/img/projects/${image}`}
          height="144"
          alt={image}
        />
      </a>
      <p><i>{description}</i></p>
      <a
        className={styles.link}
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >{link}</a>
      <a
        className={styles.link}
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
      >github</a>
    </div>
  );
}
