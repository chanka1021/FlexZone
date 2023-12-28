import React, { useState ,useEffect,useContext} from "react";
import "../components/styles/AddClub.css";
import ClubPerksForm from "../components/ClubPerksForm"
import ClubPhotosUploader from "../components/ClubPhotosUploader"
import axios from "axios";
import { checkAuth } from "../data/checkAuthntication";
import { UserContext } from "../Util/userContext";
import {useNavigate} from "react-router-dom"; 

function AddClub() { 
    const {token ,user} = useContext(UserContext)
    const navigate =useNavigate()
   
  const [step, setStep] = useState(3);
  const [clubName, setClubName] = useState("");
  const [clubAddress, setClubAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [surface, setSurface] = useState("");
  const [perks,setPerks] = useState([]);
  const [photos,setPhotos]=useState([]);

  const handleSubmit = (event) => {
    

    event.preventDefault();

    // You can handle the form submission logic here
    // For example, you can log the form data to the console
    console.log({
      clubName,
      clubAddress,
      phoneNumber,
      email,
      description,
      capacity,
      surface,
    });

    
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(()=>{
    checkAuth(token,user,navigate);
    if(!user.is_gym_owner){navigate('/dashboard')}
  })


  return (
    <div className="add-club-container">
        <div className="steps-container">
        <div className={`step-circle ${step >= 1 && "active"}`}>1</div>
        <div className={`step-circle ${step >= 2 && "active"}`}>2</div>
        <div className={`step-circle ${step === 3 && "active"}`}>3</div>
      </div>
      {step ===1 &&(<form onSubmit={handleSubmit}>
        <label>
          {" "}
          Club Name:{" "}
          <input
            type="text"
            placeholder="FlexZone"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            required
          />
        </label>
        <label>
          Club Address:{" "}
          <input
            type="text"
            placeholder="Martil Morocco"
            value={clubAddress}
            onChange={(e) => setClubAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            type="tel"
            placeholder="+212 666 666"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            placeholder="your-club@org.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <textarea
            cols="50"
            rows="10"
            placeholder="Write Description That Inspires"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Club Capacity:{" "}
          <input
            type="number"
            placeholder="How Many Person Can Fit Into Your Club"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
            min={10}
            max={999}
          />
        </label>
        <label>
          Club Surface:{" "}
          <input
            type="number"
            placeholder="Club Surface"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            required
            min={20}
            max={9999}
          />
        </label>
        <div className="add-club-btn">
          <button type="submit">SAVE</button>
        </div>
      </form>)}
      {step ===2 &&(<ClubPerksForm selectedPerks={perks} setSelectedPerks={setPerks} />)}
      {step ===3 &&(<ClubPhotosUploader  addedPhotos={photos} onChange={setPhotos} />)}
      
    </div>
  );
}

export default AddClub;