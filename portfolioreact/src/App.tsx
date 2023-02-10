import LandingPageComponent from "./components/LandingPageComponent";
import FooterComponent from "./global/ui-components/footer/FooterComponent";
import HeaderComponent from "./global/ui-components/header/HeaderComponent";
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <HeaderComponent />
      <LandingPageComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
