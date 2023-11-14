import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Store from "./pages/Store";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/clubs" element={<Clubs/>} />
      <Route path="/Store" element={<Store/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
