import Home from "./component/home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderComponent from './component/header';
import FooterComponent from './component/footer';

function App() {
  return (
    <>
      <HeaderComponent />
      {/*switch case Routes  */}
      <Home/>
      <FooterComponent/>
    </>
  );
}

export default App;
