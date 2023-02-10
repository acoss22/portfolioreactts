import styles from "./footer.module.scss";

const FooterComponent = (): any => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        @ 2023 Ana Sequeira. All rights reserved.
      </footer>
    </div>
  );
};

export default FooterComponent;
