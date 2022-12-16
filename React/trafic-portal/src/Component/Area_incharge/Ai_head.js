// import React, {Components} from "react";
// import { Link } from "react-router-dom";
// import * as Icon from 'react-bootstrap-icons';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../../App.css'
import './Ai_head.css'
import React, { useState } from 'react';
import {
    FaBars,
    FaTrafficLight,
}from "react-icons/fa";

import {
    BiHome,
    BiLogOut,
}from "react-icons/bi";

import {
    GiPoliceOfficerHead,
}from "react-icons/gi";
import {
    RiPoliceCarFill,
}from "react-icons/ri";

import {
    MdOutgoingMail,
    MdOutlineApproval,
}from "react-icons/md";


import { NavLink } from 'react-router-dom';


const Ai_head = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/ai",
          name:"Home",
          icon:<BiHome/>
      },
      {
          path:"/aiprofile",
          name:"Profile",
          icon:<GiPoliceOfficerHead/>
      },
      {
          path:"/aisendmail",
          name:"Send Mail",
          icon:<MdOutgoingMail/>
      },
      {
          path:"/aiforce",
          name:"Approve Force",
          icon:<RiPoliceCarFill/>
      },
      {
          path:"/aileave",
          name:"Approve Leave",
          icon:<MdOutlineApproval/>
      },
      {
          path:"/logout",
          name:"Logout",
          icon:<BiLogOut/>
      },
      
  ]
  return (
      <div className="sidebar-container">
         <div style={{width: isOpen ? "200px" : "60px"}} className="sidebar">
             <div className="top_section">
                  <h3 style={{display: isOpen ? "block" : "none"}} className="logo"><FaTrafficLight/>Traffic Portal</h3>
                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                     <FaBars onClick={toggle}/>
                  </div>
              </div>
             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="link " activeclassName="active">
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
         </div>
         <main>{children}</main>
      </div>
  );
};

export default Ai_head;