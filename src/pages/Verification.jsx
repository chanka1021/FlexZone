import React, { useState, useContext, useEffect } from "react";
import "../components/styles/verification.css";
import axios from "axios";
import { UserContext } from "../Util/userContext";
function Verification() {
  const [Code, setCode] = useState("");
  const [verified, setVerified] = useState(true);
  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/verify", {
        Code: Code,
        id: JSON.parse(localStorage.getItem("userToVerify")),
      });
      if (response.data.message === "Incorrect code") {
        alert("Verification code is incorrect. Please try again."); // Show a success message
      } else {
        alert("Verification code entered Succesfully");
        localStorage.removeItem("isVerified");
        localStorage.removeItem("userToVerify");
        window.location.href = "/signin";
        return;
      }
    } catch (error) {
      console.error("Error verifying code:", error.message);
      alert("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("isVerified") === "false" &&
      localStorage.getItem("userToVerify")
    ) {
      setVerified(false);
    } else {
      setVerified(true);
      window.location.href = "/";
      return;
    }
  });

  return (
    <>
      {!verified && (
        <div className="VerificationForm-conatiner">
          <h2>Verification Email </h2><span> refresh page to re-send the code </span>
          <form onSubmit={handleVerification} style={{display:"flex" ,flexDirection:"column" , alignItems:"center" ,justifyContent:"space-evenly", height:"200px"}}>
            <label>
              Enter Verification Code
              <br/>
              <input
                type="text"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
                required
                style={{marginTop:"20px"}}
              />
            </label>
            <div className="enter-verify-code" style={{}}>
              {" "}
              <button type="submit" style={{backgroundColor:"rgb(115, 218, 115)" , padding:"5px" , borderRadius:"3px"}}>Verify</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Verification;
