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
import axios from "axios";
import { checkAuth } from "../data/checkAuthntication";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn, user, setUser, setToken, token } =
    useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
  };

  const handleBecomeAnOwner = () => {
    checkAuth(token, user, navigate);
    alert("becoming an owner");
    try {
      axios
        .post(
          "/gymOwner/" + user.id,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          if (res.status === 200) {
            alert("you ve become a gym owner , congrats! , re-login please");
            handleLogout();
          } else {
            alert("something wrong happend try again later!");
          }
        });
    } catch (error) {}
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
          <NavLink to="/store">Boutique</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {isLoggedIn && user ? (
            <NavLink to="/dashboard">Dashboard</NavLink>
          ) : (
            <div className="AccountBtn">
              <NavLink to="/signin">S'inscrire</NavLink>
            </div>
          )}
        </li>
        <li>
          {isLoggedIn && user && user.is_gym_owner && !user.has_gym && !user.is_admin && (
            <NavLink to={"/dashboard/add-your-club"}>
              Ajouter Votre Club
            </NavLink>
          )}
        </li>
        <li>
          {isLoggedIn && user && !user.is_admin && !user.is_gym_owner && !user.has_gym && (
            <div onClick={handleBecomeAnOwner} className="become-a-gym-owner">
              <NavLink>Devenir Propriétaire</NavLink>
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
