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

      <div className={styles.wrapper}>
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
            <div className={styles.tags}>#React #JavaScript</div>
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

      <div className={styles.wrapper}>
        <span className={styles.projectsTitle}>Skillset</span>

        <div className="row">
          <div className="column">
            <h2>Languages and Database</h2>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>TypeScript</h3>
            <h3>MySQL</h3>
            <h3>MongoDB</h3>
          </div>
          <div className="column">
            <h2>Frameworks and Libraries</h2>
            <h3>Angular</h3>
            <h3>React</h3>
            <h3>Svelte</h3>
            <h3>Mendix</h3>
            <h3>NodeJS Express</h3>
            <h3>JQuery</h3>
            <h3>SASS</h3>
            <h3>PWA</h3>
            <h3>Ionic</h3>
            <h3>Cordova</h3>
            <h3>Redux</h3>
          </div>
          <div className="column">
            <h2>Tools and Ways of Working</h2>
            <h3>VSCode</h3>
            <h3>Confluence</h3>
            <h3>Bitbucket</h3>
            <h3>JIRA</h3>
            <h3>SCRUM/Agile</h3>
            <h3>CI/CD</h3>
            <h3>GIT</h3>
            <h3>Slack</h3>
            <h3>Jenkins</h3>
            <h3>Docker</h3>
            <h3>SonarQube</h3>
            <h3>Figma</h3>
            <h3>Maze</h3>
            <h3>ARIS Enterprise</h3>
            <h3>WebMethods</h3>
          </div>
          <div className="column">
            <h2>Cloud</h2>
            <h3>AWS S3</h3>
            <h3>AWS CF</h3>
            <h3>AWS Route53</h3>
            <h3>AWS Registry</h3>
            <h3>AWS Lambda</h3>
            <h3>AWS API Gateway</h3>
          </div>
          <div className="column">
            <h2>Testing</h2>
            <h3>Enzyme</h3>
            <h3>Jest</h3>
            <h3>React Testing Library</h3>
            <h3>Karma</h3>
            <h3>Jasmine</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPageComponent;
