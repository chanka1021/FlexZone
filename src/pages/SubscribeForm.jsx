import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "../components/styles/subscribe-form.css"; // Import your CSS file
import { UserContext } from "../Util/userContext";
import axios from "axios";
function SubscribeForm() {
  const { token, isLoggedIn, user, setUser } = useContext(UserContext);
  const [ready, setReady] = useState(false);
  const [club, setClub] = useState(null);
  const [planeId, setPlaneId] = useState(null);
  const [duration, setDuration] = useState(1);
  const { clubId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/signin");
    }
    if (!clubId) {
      return navigate("/clubs");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      axios
        .get("/user/profile", config)
        .then((res) => {
          //console.log(res.status)
          if (res.status === 200) {
            setUser(res.data.data);
            localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(res.data.data));
            console.log(res.data.data);
            if (!res.data.data.is_gym_owner && !res.data.data.is_admin) {
              setReady(true);
            } else {
              navigate("/dashboard");
            }
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      // console.log(error)
    }
  }, []);

  const handlePlanChange = (selectedPlaneId) => {
    setPlaneId(selectedPlaneId);
  };

  useEffect(() => {
    if (!clubId) {
      return navigate("/clubs");
    }
    try {
      axios.get(`/gym/${clubId}`).then((response) => {
        if (response.status === 200) {
          setClub(response.data.data);
        } else {
          alert("something wrong happends");
        }

        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [clubId]);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (planeId === null) {
      alert('select a plane')
      return;
    }
   
    try {
      axios
        .post("/subscription/subscribe", {
          planeId,
          duration,
        },{
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.status === 201) {
            alert("you subscribed succesfully");
            return navigate("/dashboard");
          } else{
            alert('somthing wrong happend ,please try again')
          }
        })
        .catch(err=>{
          console.log(err)
          if(err.response.status===409){
            alert("You already have a subscription to this club");
            return navigate("/dashboard");
          }
        });
    } catch (error) {}
  };

  if (ready && club) {
    return (
      <div className="subscribe-container">
        <h1>Abonnement</h1>
        <form onSubmit={handleSubscribe}>
          <div className="form-group">
            <label>Your Name:</label>
            <span>{user.first_name + " " + user.last_name}</span>
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <span>{user.email}</span>
          </div>
          <div className="form-group">
            <label>Club Name:</label>
            <span>
              <NavLink to={"/clubs/" + clubId}> {club.name} </NavLink>
            </span>
          </div>
          <div className="form-group">
            <label>Club Address:</label>
            <span>{club.address}</span>
          </div>
          <div className="form-group">
            <label>Sélectionner Plan d'Abonnement:</label>
            <span>
              {club.subsription_planes &&
                club.subsription_planes.map((plan) => (
                  <span>
                    <input
                      type="radio"
                      name="subscriptionPlan"
                      value={plan.id}
                      checked={plan.id === planeId}
                      onChange={() => handlePlanChange(plan.id)}
                    />
                    {plan.name}
                  </span>
                ))}
            </span>
          </div>
          <div className="form-group">
            <label>Prix de Plan d'Abonnement:</label>
            <span>100 MAD/Mois</span>
          </div>
          <div className="form-group">
            <label>Durée - en mois:</label>

            <input
              type="number"
              min={1}
              required
              value={duration}
              onChange={(ev) => setDuration(ev.target.value)}
            />
          </div>
          <button type="submit">Valider</button>
        </form>
        {/* <div className="payment-section">
        <h2>Payment</h2>
        <div className="form-group">
          <label>Your Card Info:</label>
          <input type="text" placeholder="Card Number" />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label>CVC:</label>
          <input type="text" placeholder="CVC" />
        </div>
        <button>Submit Payment</button>
      </div> */}
      </div>
    );
  } else {
    return <h1>Loading ....</h1>;
  }
}

export default SubscribeForm;
