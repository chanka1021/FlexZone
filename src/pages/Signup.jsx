// SignUp.js

import React, { useState } from "react";
import "../components/styles/Sign.css";
import axios from "axios";
import { validateSignUpInput } from "../data/validating";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      //verify inputs
      const response = validateSignUpInput(
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      );
      if (response.messages.length === 0 && response.state) {
        const data = await axios.post("register", {
          firstName,
          lastName,
          email,
          password,
        });
        console.log("Signing up with:", data);
        if (data.status === 201) {
          alert("Compte crée avec réussite");
          navigate("/signin");
        } else {
          alert("somhting wrong happends");
        }
      } else {
        console.log(response.messages);
      }
    } catch (error) {
      console.log(error.response);
      //alert(error.response.data.message)
    }
  };

  return (
    <div className="LoginForm">
      {/* {message !== '' && <p>{message}</p>} */}
      <h2>S'inscrire</h2>
      <form onSubmit={handleSignUp}>
        <label>
          <input
            placeholder="Prénom"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Nom"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Confirmer le mot de passe"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Vous avez déjà un compte !{" "}
        <Link className="SignupLabel" to={"/signin"}>
          se connecter maintenant
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
