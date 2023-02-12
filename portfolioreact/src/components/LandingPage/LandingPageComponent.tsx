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
            I am consistently learning new ways to increase my skillset even it
            goes out of the frontend world!
          </div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.img}
            src={require("../../assets/img/madeira.jpg")}
          />
        </div>
      </div>



      <div className={styles.projects}>
        <span className={styles.projectsTitle}>Projects</span>
        <div className={styles.project}>
          <div className={styles.projectName}>Japanese Keyboard</div>
          <div className={styles.description}>
            Japanese Keyboard React Application to Write in Hiragana, Katakana
            and Kanji
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.img}
              src={require("../../assets/img/jp.png")}
            />
          </div>
          <div className={styles.tags}>#React #SCSS</div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectName}>Wishlist</div>
          <div className={styles.description}>
            An app to show what gifts you would like! Made with React & redux.
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.img}
              src={require("../../assets/img/wishlist.png")}
            />
            <div className={styles.tags}>#React #JavaScript #SCSS</div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectName}>Image Search</div>
            <div className={styles.description}>
              Write a word and see the result of images! Try 'cat' or 'dog' for
              example! Made with React & redux.
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.img}
                src={require("../../assets/img/imagesearch.png")}
              />
            </div>
            <div className={styles.tags}>ssss#React #JavaScript</div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectName}>Old Portolio</div>
            <div className={styles.description}>
              My old portfolio! Made with Angular.
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.img}
                src={require("../../assets/img/oldportfolio.png")}
              />
            </div>
            <div className={styles.tags}>#Angular #TypeScript</div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectName}>Even Older Portolio</div>
            <div className={styles.description}>
              My old portfolio! Made with Angular.
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.img}
                src={require("../../assets/img/evenolderportfolio.png")}
              />
            </div>
            <div className={styles.tags}>Angular #TypeScript</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPageComponent;
