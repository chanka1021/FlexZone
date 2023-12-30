import React, { useContext, useState, useEffect } from "react";
import "../components/styles/Dashboard.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaUsers, FaCamera } from "react-icons/fa";
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
  const [ready,setReady] = useState(false);
  
  const navigate = useNavigate();
  //shared state
  const { token ,user,setUser} = useContext(UserContext);

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
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(res.data.data));
            console.log(res.data.data);
            setReady(true)
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
  }, []);
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

  const handleChangeProfilePicture = () => {
    // Trigger the click event of the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    // Handle the selected directory or file here
    const selectedFiles = event.target.files;

    // Check if any files are selected
    if (selectedFiles.length > 0) {
      const picture = selectedFiles[0];
      console.log("Selected File:", picture);

      // Create a FormData object and append the file to it
      const formData = new FormData();
      formData.append("picture", picture);
      try {
        axios.post("user/set-profile-picture", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }).then(res=>{
          if(res.status===202){
            user.picture=res.data.data
            setUser(user)
            localStorage.setItem('user',user)
          }
        })
      } catch (error) {}

      // You can perform additional logic with the selected file here
    }
  };

  // Ref for the file input element
  const fileInputRef = React.createRef();
  if (token && user && ready) {
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
            <>
              <img
                className="UserImg"
                src={"http://localhost:8000/images/profileImgs/" + user.picture}
              />
              <FaCamera
                className="change-profile-icon"
                onClick={handleChangeProfilePicture}
              ></FaCamera>
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                multiple={false}
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
            </>
            <div className="UserType">
              {user.is_admin
                ? "Admin"
                : user.is_gym_owner
                ? "Gym Owner"
                : "User"}
            </div>
            <div className="UserName">
              {user.first_name + " " + user.last_name}{" "}
            </div>
            <div className="UserJD">
              Membre depuis :{" "}
              {new Date(user.created_at).getFullYear() +
                "/" +
                new Date(user.created_at).getMonth() +
                "/" +
                new Date(user.created_at).getDate()}
            </div>
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
