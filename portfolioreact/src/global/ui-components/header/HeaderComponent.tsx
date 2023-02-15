import styles from "./header.module.scss";

const HeaderComponent = (): any => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.link}>
              <span className={styles.title}>Ana CS</span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
