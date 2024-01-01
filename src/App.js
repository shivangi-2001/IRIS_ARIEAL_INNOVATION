import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './component/header';
import FooterComponent from './component/footer';
import Home from "./component/home";
import About from "./component/about";
import Contact from './component/contact';


function App() {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
