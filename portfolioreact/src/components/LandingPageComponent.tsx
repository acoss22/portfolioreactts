import styles from "./landingpage.module.scss";

const LandingPageComponent = (): any => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div> Hi, my name is Ana. </div>
          <div> I'm a Frontend engineer, based in Lisbon.</div>
          <div>
            I specialize in using web techonologies to create responsive Hybrid
            Mobile/Web Applications.
          </div>
          <div>
            I am consistently learning new ways to increase my skillset even it goes
            out of the frontend world!
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={require("../assets/img/madeira.jpg")} />
        </div>
      </div>
      <div className={styles.container}>
        Projects
        </div>
    </main>
  );
};

export default LandingPageComponent;
