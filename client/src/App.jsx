import {Homepage} from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Aboutpage } from "./pages/Aboutpage";
import { Contactpage } from "./pages/Contactpage";
import { Servicepage } from "./pages/Servicepage";
import { Registerpage } from "./pages/Registerpage";
import { Loginpage } from "./pages/Loginpage";
import { Navbar } from "./components/Navbar";
// import {Error} from "./pages/Errorpage";
import {footer} from "./components/footer";
import { Errorpage } from "./pages/Errorpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
      <footer/>
    </Router>
  );
};

export default App;