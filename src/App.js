import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";


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
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />


    </Routes>
    <Footer/>
    </>
  );
}

export default App;
