import styles from "./footer.module.scss";
import { ReactComponent as GithubIcon } from '../../../assets/svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/svg/linkedin.svg';

const FooterComponent = (): any => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        Copyright © 2023 Ana Sequeira
        <div>
            <a
              href="https://github.com/acoss22"
              target="_blank"
              rel="noreferrer"
              className={styles.link}>
              <GithubIcon className={styles.link}/>
            </a>
            <a
              href="https://www.linkedin.com/in/acoss/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}>
              <LinkedinIcon className={styles.link}/>
            </a>
          </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
