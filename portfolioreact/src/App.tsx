import LandingPageComponent from "./components/LandingPageComponent";
import FooterComponent from "./global/ui-components/footer/FooterComponent";
import HeaderComponent from "./global/ui-components/header/HeaderComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <LandingPageComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
