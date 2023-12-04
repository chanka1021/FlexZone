import React, { useState } from "react";
import "./styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import ico from "../assets/Icon.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setisLogged] = useState(false);


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
          <NavLink to="/store">Botique</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li  onClick={() => setisLogged(!isLogged)}>
          {isLogged ? <div className="logged">
            <MdOutlineMenu />
            <FaRegUserCircle />
          </div> :
            <div className="AccountBtn">
              <NavLink to="">join club</NavLink>
            </div>
          }
        </li>
      </ul>
    </nav>
  );
};