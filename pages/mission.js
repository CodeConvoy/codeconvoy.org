import CodeIcon from '@material-ui/icons/Code';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


import styles from '../styles/pages/Mission.module.css';

export default function Mission() {
  return (
    <div className={styles.container}>
      <h1>Mission</h1>
      <hr />
      <div className={styles.content}>
        <p className={styles.motto}>
          <i><b>CodeConvoy aims to simplify development.</b></i>
        </p>
        <p>We believe that <b>everyone should have the tools they need to
        create their dream project.</b> That&apos;s why we are committed to
        making helpful and educational developer tools that are <b>100% free
        and open source, forever.</b></p>
        <MoneyOffIcon fontSize="large" />
        <LockOpenIcon fontSize="large" />
        <CodeIcon fontSize="large" />
        <p>Want to contribute? Check out our{' '}
          <a
            href="https://github.com/codeconvoy"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>.
        </p>
      </div>
    </div>
  );
}
