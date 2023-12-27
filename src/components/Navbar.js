import React, { useState, useContext } from "react";
import "./styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import ico from "../assets/Icon.png";
import { UserContext } from "../Util/userContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <nav>
      <Link to="/" className="title">
        <img src={ico} />
        Flexzone
      </Link>
      <div className="MenuMobile" onClick={() => setMenuOpen(!menuOpen)}>
        <MdOutlineMenu />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
        <li>
          <NavLink to="/clubs">Clubs</NavLink>
        </li>
        <li>
          <NavLink to="/nearest">Explorer</NavLink>
        </li>
        <li>
          <NavLink to="/store">Botique</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {isLoggedIn ? (
            <NavLink to="/dashboard">Dashboard</NavLink>
          ) : (
            <div className="AccountBtn">
              <NavLink to="/signin">S'inscrire</NavLink>
            </div>
          )}
        </li>
        <li>
          {isLoggedIn && (
            <div className="AccountBtn">
            <NavLink to={"/"} className="logout-btn" onClick={handleLogout}>
              <LuLogOut />
            </NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
