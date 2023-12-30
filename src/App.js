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
import AddClub from "./pages/AddClub";
import SubscribeForm from "./pages/SubscribeForm";
axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token"))|| null);
  const [isLoggedIn, setIsLoggedIn] = useState((user && token)?true:false);
  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, token, setToken, isLoggedIn, setIsLoggedIn }}
      >
        <Navbar />
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

          <Route path="/dashboard/add-your-club" element={<AddClub/>} />
          <Route path="/subscribe/:clubId" element={<SubscribeForm/>} />
          
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
