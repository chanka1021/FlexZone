import React, { useState } from 'react'
import '../components/styles/Dashboard.css'
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { BsInfoSquare } from "react-icons/bs";

import img from '../assets/reussiPhoto.png'
import UserOverView from '../components/userdashboard components/UserOverView';
import UsersGym from '../components/userdashboard components/UsersGym';
import Gymoverview from '../components/gymOwner dashboard components/Gymoverview';
import Gymplans from '../components/gymOwner dashboard components/Gymplans';
import GymMembers from '../components/gymOwner dashboard components/GymMembers';

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleItemClick = (item) => {
    const selectedItemObj = UserNavItems.find((navItem) => navItem.id === item) || GymOwnerNavItems.find((navItem) => navItem.id === item);
    
    setSelectedItem(selectedItemObj.id);
    setSelectedComponent(selectedItemObj.component || null);
  };

  const UserNavItems = [
    { id: 'Aperçu', icon: <MdOutlineDashboard />, text: 'Aperçu' ,component : <UserOverView/> },
    { id: 'club', icon: <GiGymBag />, text: 'Club', component : <UsersGym/>},
    { id: 'achats', icon: <MdOutlineProductionQuantityLimits />, text: 'Achats' },
  ]

  const GymOwnerNavItems = [
    { id: 'dashboard', icon: <MdOutlineDashboard />, text: 'dashboard' ,component : <Gymoverview/>},
    { id: 'Plans', icon: <MdOutlinePriceCheck />, text: 'Plans' ,component : <Gymplans/>},
    { id: 'Adherants', icon: <FaUsers />, text: 'Adherants' , component : <GymMembers/> },
    { id: 'Products', icon: <FaCartPlus />, text: 'Products' },
    { id: 'Historique des achats ', icon: <MdOutlineProductionQuantityLimits />, text: 'Historique des achats ' },
    { id: 'Gym info', icon: <BsInfoSquare />, text: 'Gym info' },
  ]
  var NavItems;
  var IsGymOwner = true;
  IsGymOwner ? NavItems = GymOwnerNavItems : NavItems = UserNavItems

  return (
    <div className='Dashboard'>
       <div className="DBnavbar">
        <ul>
          {NavItems.map((item) => (
            <li
              key={item.id}
              className={selectedItem === item.id ? 'selected' : ''}
              onClick={() => handleItemClick(item.id)}
            >
              <a>{item.icon}</a>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className='Actions'>
      {selectedComponent}
      
      </div>
      <div className='UserData'>
        <div className='UserDetails'>
          <img className='UserImg' src={img} />
          <div className='UserType'>Gym Owner</div>
          <div className='UserName'>Cristiano Ronaldo</div>
          <div className='UserJD'>Membre depuis : 01/10/2023</div>
        </div>
        <div className='UserPersonalInfos'>
          <p>détails personnels</p>
          <span>Num de tele : <a>066666666</a></span>
          <hr/> 
          <span>Adress : <a>sdsdsd sdsd</a></span>
          <hr/> 
          <span>Email : <a>sdsd@sdsd.sdsd</a></span>
        </div>

      </div>
    
    </div>
  )
}

export default Dashboard