import styles from "./landingpage.module.scss";
import { CCardLink } from "@coreui/react";
import GenericCardComponent from "../../global/ui-components/genericCard/GenericCard";
import GenericListComponent from "../../global/ui-components/genericList/GenericList";

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
            alt="photograph of Ana"
            src={require("../../assets/img/madeira.jpg")}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        <span className={styles.projectsTitle}>Projects</span>
        <div className={styles.cardWrapper}>
          <GenericCardComponent
            imageUrl={require("../../assets/img/jp.png")}
            title="Japanese Keyboard"
            description="Japanese Keyboard React Application to Write in Hiragana, Katakana and Kanji"
            tags="#React #SCSS"
            links={[
              <CCardLink className={styles.marginRight} href="#">
                GITHUB
              </CCardLink>,
              <CCardLink href="#">DEMO</CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/wishlist.png")}
            title="Wishlist"
            description="An app to show what gifts you would like! Made with React & redux."
            tags="#React #JavaScript #SCSS"
            links={[
              <CCardLink className={styles.marginRight} href="#">
                GITHUB
              </CCardLink>,
              <CCardLink href="#">DEMO</CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/imagesearch.png")}
            title="Image Search"
            description="Write a word and see the result of images! Try 'cat' or 'dog' for example! Made with React & redux."
            tags="#React #JavaScript #SCSS"
            links={[
              <CCardLink className={styles.marginRight} href="#">
                GITHUB
              </CCardLink>,
              <CCardLink href="#">DEMO</CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/oldportfolio.png")}
            title="Old Portolio"
            description="My old portfolio! Made with Angular."
            tags="#Angular #TypeScript #SCSS"
            links={[
              <CCardLink className={styles.marginRight} href="#">
                GITHUB
              </CCardLink>,
              <CCardLink href="#">DEMO</CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/evenolderportfolio.png")}
            title="Even Older Portolio"
            description="My old portfolio! Made with Angular."
            tags="#Angular #TypeScript #SCSS"
            links={[
              <CCardLink className={styles.marginRight} href="#">
                GITHUB
              </CCardLink>,
              <CCardLink href="#">DEMO</CCardLink>,
            ]}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        <span className={styles.projectsTitle}>Skillset</span>
        <div className={styles.cardWrapper}>
        <GenericListComponent
          title="Languages & DBs"
          items={["HTML", "CSS", "JS", "TS", "MySQL", "MongoDB"]}
        />
        <GenericListComponent
          title="Frameworks & Libs"
          items={[
            "React",
            "Angular2+",
            "AngularJS",
            "Svelte",
            "Mendix",
            "NodeJS Express",
            "JQuery",
            "SASS",
            "PWA",
            "Ionic",
            "Cordova",
            "Redux",
          ]}
        />

        <GenericListComponent
          title="Tools and Ways of Working"
          items={[
            "VSCode",
            "Confluence",
            "Bitbucket",
            "JIRA",
            "SCRUM/Agile",
            "CI/CD",
            "GIT",
            "Slack",
            "Jenkins",
            "Docker",
            "SonarQube",
            "Figma",
            "Maze",
            "ARIS",
            "Enterprise WebMethods",
          ]}
        />

        <GenericListComponent
          title="Cloud"
          items={["AWS Registry", "AWS Lambda", "AWS API Gateway"]}
        />
        <GenericListComponent
          title="Testing"
          items={["Enzyme", "Jest", "ReactTesting Library", "Karma & Jasmine"]}
        />
         </div>
      </div>
    </main>
  );
};

export default LandingPageComponent;
