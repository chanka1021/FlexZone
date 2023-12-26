import React, { useState, useContext } from "react";
import "../components/styles/Sign.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Util/userContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate()
  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here, e.g., make an API call to authenticate the user
    try {
      axios
        .post("/login", { email, password })
        .then((res) => {
          if (res.status === 200) {
            //console.log(200,res)
            setToken(res.data.data);
            alert(res.data.message);
            navigate("/dashboard")
          } else {
            alert("something wrong happends");
          }
        })
        .catch((err) => {
          alert("something wrong happends , please try again later");
        });

      // console.log(data.message)
    } catch (error) {
      //console.log(error)
    }

    // console.log('Signing in with:', email, password);
  };

  return (
    <div className="LoginForm">
      <h2>Se connecter</h2>
      <form onSubmit={handleSignIn}>
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
            placeholder="Mot de pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Vous n'avez pas de compte ?{" "}
        <Link className="SignupLabel" to={"/signup"}>
          S'inscrire maintenant
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
