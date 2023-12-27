import React, { useContext, useState, useEffect } from "react";
import "../components/styles/Dashboard.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { BsFillNutFill, BsInfoSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img from "../assets/reussiPhoto.png";
import UserOverView from "../components/userdashboard components/UserOverView";
import UsersGym from "../components/userdashboard components/UsersGym";
import { UserContext } from "../Util/userContext";
import axios from "axios";
function Dashboard() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //shared state
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token == null) {
      return navigate("/signin");
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
            console.log(res.data.data);
          } else {
            return navigate("/signin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      // console.log(error)
    }
  }, [token]);
  const handleItemClick = (item) => {
    const selectedItemObj =
      UserNavItems.find((navItem) => navItem.id === item) ||
      GymOwnerNavItems.find((navItem) => navItem.id === item);

    setSelectedItem(selectedItemObj.id);
    setSelectedComponent(selectedItemObj.component || null);
  };

  const UserNavItems = [
    {
      id: "Aperçu",
      icon: <MdOutlineDashboard />,
      text: "Aperçu",
      component: <UserOverView />,
    },
    { id: "calendar", icon: <IoCalendarOutline />, text: "Calendrier" },
    { id: "club", icon: <GiGymBag />, text: "Club", component: <UsersGym /> },
    {
      id: "achats",
      icon: <MdOutlineProductionQuantityLimits />,
      text: "Achats",
    },
  ];

  const GymOwnerNavItems = [
    { id: "dashboard", icon: <MdOutlineDashboard />, text: "dashboard" },
    { id: "Plans", icon: <MdOutlinePriceCheck />, text: "Plans" },
    { id: "Adherants", icon: <FaUsers />, text: "Adherants" },
    { id: "Products", icon: <FaCartPlus />, text: "Products" },
    {
      id: "Historique des achats ",
      icon: <MdOutlineProductionQuantityLimits />,
      text: "Historique des achats ",
    },
    { id: "Gym info", icon: <BsInfoSquare />, text: "Gym info" },
  ];
  var NavItems;
  var IsGymOwner = false;
  IsGymOwner ? (NavItems = GymOwnerNavItems) : (NavItems = UserNavItems);

  if (token && user) {
    return (
      <div className="Dashboard">
        <div className="DBnavbar">
          <ul>
            {NavItems.map((item) => (
              <li
                key={item.id}
                className={selectedItem === item.id ? "selected" : ""}
                onClick={() => handleItemClick(item.id)}
              >
                <a>{item.icon}</a>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="Actions">{selectedComponent}</div>
        <div className="UserData">
          <div className="UserDetails">
            <img
              className="UserImg"
              src={"http://localhost:8000/images/profileImgs/" + user.picture}
            />
            <div className="UserType">{user.is_admin?"Admin":user.is_gym_owner?"Gym Owner":"User"}</div>
            <div className="UserName">
              {user.first_name + " " + user.last_name}{" "}
            </div>
            <div className="UserJD">Membre depuis : {new Date(user.created_at).getFullYear()+"/"+new Date(user.created_at).getMonth()+"/"+new Date(user.created_at).getDate()}</div>
          </div>
          <div className="UserPersonalInfos">
            <p>détails personnels</p>
            <span>
              Num de tele : <a>066666666</a>
            </span>
            <hr />
            <span>
              Address : <a>sdsdsd sdsd</a>
            </span>
            <hr />
            <span>
              Email : <a>{user.email}</a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Dashboard;
