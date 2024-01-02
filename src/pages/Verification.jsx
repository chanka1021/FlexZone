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
          <h2>Verification</h2>
          <form onSubmit={handleVerification}>
            <label>
              Enter Verification Code:
              <input
                type="text"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </label>
            <div className="enter-verify-code">
              {" "}
              <button type="submit">Verify</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Verification;
