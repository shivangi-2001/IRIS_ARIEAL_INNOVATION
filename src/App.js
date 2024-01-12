import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './component/header';
import FooterComponent from './component/footer';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from './pages/contact';


function App() {
  return (
    <>
      <HeaderComponent />

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}

      <FooterComponent />
    </>
  );
}

export default App;
