import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import Image from 'next/image';

import styles from '../styles/Index.module.css';

const outLink = {
  target: "_blank",
  rel: "noopener noreferrer"
};

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.title}>
          <h1>CodeConvoy</h1>
          <Image src="/logo.png" height="48" width="48" />
        </div>
        <hr />
        <p>Escorting you to a future in coding.</p>
        <h1>Our Projects</h1>
        <hr />
        <div className={styles.project}>
          <p><b>Codetrain</b></p>
          <p>An educational browser game engine.</p>
          <a href="https://codetrain.org" {...outLink}>codetrain.org</a>
          <a href="https://github.com/csaye/codetrain" {...outLink}>github</a>
        </div>
        <div className={styles.project}>
          <p><b>Devcomms</b></p>
          <p>Team communication and coordination all in one place.</p>
          <a href="https://devcomms.io" {...outLink}>devcomms.io</a>
          <a href="https://github.com/csaye/devcomms" {...outLink}>github</a>
        </div>
        <p><b>+ more coming soon!</b></p>
        <h1>Contact</h1>
        <hr />
        <div className={styles.contact}>
          <a href="https://github.com/codeconvoy" {...outLink}>
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://twitter.com/codeconvoyorg" {...outLink} >
            <TwitterIcon fontSize="large" />
          </a>
          <a href="mailto:contact@codeconvoy.org">
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}
