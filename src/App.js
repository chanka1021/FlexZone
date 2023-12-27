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
import Club from "./pages/Club";

import Dashboard from "./pages/Dashboard";

import NearestGyms from "./pages/NearestGyms";
import axios from "axios";

import { useState } from "react";
import { UserContext } from "./Util/userContext";
axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  return (
    <>
      <Navbar />
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/clubs/:id" element={<Club />} />
          <Route path="/nearest" element={<NearestGyms />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
