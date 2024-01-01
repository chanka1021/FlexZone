import React, { useState, useContext } from "react";
import "../components/styles/Sign.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Util/userContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here, e.g., make an API call to authenticate the user
    try {
      axios
        .post("/login", { email, password })
        .then((res) => {
          console.log(res)
          switch (res.status) {
            case 200:
              setToken(res.data.data);
              setIsLoggedIn(true);
              localStorage.setItem("token", JSON.stringify(res.data.data));
              alert(res.data.message);
              if (localStorage.getItem("clubToSub")) {
                return navigate("/subscribe");
              }
              return navigate("/dashboard");

            default:
              alert("something wrong happends");
              break;
          }
          
        })
        .catch((err) => {
          if(err.response.status===302){
            alert('verify your email')
            localStorage.removeItem('isVerified')
            localStorage.removeItem('userToVerify')
            localStorage.setItem('isVerified','false')
            //console.log(err)
            localStorage.setItem('userToVerify',JSON.stringify(err.response.data.data))
            window.location.href = "/verification";
            return
          }
          alert("something wrong happends , please try again later");
        });

      
    } catch (error) {
     
    }

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
