import styles from "./landingpage.module.scss";
import { CCardLink } from "@coreui/react";
import GenericCardComponent from "../../global/ui-components/genericCard/GenericCard";
import GenericListComponent from "../../global/ui-components/genericList/GenericList";

const LandingPageComponent = (): any => {
  return (
    <main className={styles.main}>
      <div className={styles.aboutMe}>
        <div className={styles.wrapper}>
          <span className={styles.title}>About me</span>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div> Hi, my name is Ana. </div>
            <div> I'm a <span className={styles.bold}>Frontend engineer</span> based in Lisbon.</div>
            <div>
              I specialize in web techonologies to create responsive 
              <span className={styles.bold}> Hybrid Mobile/Web Applications.</span>
            </div>
            <div>I am consistently learning ways to increase my skillset.</div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.img}
              alt="photograph of Ana"
              src={require("../../assets/img/madeira.jpg")}
            />
          </div>
        </div>
      </div>

      <div className={styles.projects}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Projects</span>
        <div className={styles.cardWrapper}>
          <GenericCardComponent
            imageUrl={require("../../assets/img/500x500jp.png")}
            title="Japanese Keyboard"
            description="Write in Hiragana, Katakana and Kanji"
            tags="#React #SCSS"
            links={[
              <CCardLink
                className={styles.marginRight}
                href="https://github.com/acoss22/japanese_keyboard"
              >
                GITHUB
              </CCardLink>,
              <CCardLink href="http://japanese-keyboard.s3-website-us-east-1.amazonaws.com/">
                DEMO
              </CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/500x500wishlist.png")}
            title="Wishlist"
            description="An app to show what gifts you would like!"
            tags="#React #JS #SCSS"
            links={[
              <CCardLink
                className={styles.marginRight}
                href="https://github.com/acoss22/wishlist"
              >
                GITHUB
              </CCardLink>,
              <CCardLink href="http://wishlist-version-a.s3-website.eu-west-3.amazonaws.com/">
                DEMO
              </CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/500x500imagesearch.png")}
            title="Image Search"
            description="Write a word and see the result! Try 'cat'!"
            tags="#React #JS #SCSS"
            links={[
              <CCardLink
                className={styles.marginRight}
                href="https://github.com/acoss22/imagesearch"
              >
                GITHUB
              </CCardLink>,
              <CCardLink href="http://image-search-react-app.s3-website-us-east-1.amazonaws.com/">
                DEMO
              </CCardLink>,
            ]}
          />

          <GenericCardComponent
            imageUrl={require("../../assets/img/500x500portfolio.png")}
            title="Old Portolio"
            description="My old portfolio! Made in Angular!"
            tags="#Angular #TS #SCSS"
            links={[
              <CCardLink
                className={styles.marginRight}
                href="https://github.com/acoss22/new_portfolio_from_zero_angular"
              >
                GITHUB
              </CCardLink>,
              <CCardLink href="http://portfolioangular2022.s3-website-us-east-1.amazonaws.com/home">
                DEMO
              </CCardLink>,
            ]}
          />
        </div>
      </div>
      </div>
      
      <div className={styles.skillset}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Skillset</span>
        <div className={styles.cardWrapper}>
          <GenericListComponent
            title="Languages"
            items={["HTML", "CSS", "JS", "TS", "MySQL", "MongoDB"]}
          />
          <GenericListComponent
            title="Frameworks"
            items={[
              "SASS",
              "React",
              "Angular2+",
              "AngularJS",
              "Svelte",
              "Mendix",
              "NodeJS Express",
              "JQuery",
              "PWA",
              "Ionic",
              "Cordova",
              "Redux",
            ]}
          />

          <GenericListComponent
            title="Tools"
            items={[
              "Atlassian Tools",
              "SCRUM",
              "GIT",
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
            items={[
              "IAM",
              "Registry",
              "Certificate Manager",
              "Lambda",
              "API Gateway",
              "S3 Buckets",
              "EC2",
              "Route53",
              "CloudFront",
              "Cognito",
              "Code Artifact",
              "Cloud Formation",
              "KMS",
              "Cloud Watch"
            ]}
          />
          <GenericListComponent
            title="Testing"
            items={[
              "Enzyme",
              "Jest",
              "React Testing Library",
              "Karma & Jasmine (Angular)",
            ]}
          />
        </div>
      </div>
      </div>
    </main>
  );
};

export default LandingPageComponent;
