// import React, {Components} from "react";
// import { Link } from "react-router-dom";
// import * as Icon from 'react-bootstrap-icons';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../../App.css'
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {
    BiHome,
    BiLogOut,
}from "react-icons/bi";


const Duty_head = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/de",
          name:"Dashboard",
          icon:<FaTh/>
      },
    //   {
    //       path:"/deprofile",
    //       name:"Profile",
    //       icon:<FaUserAlt/>
    //   },
    //   {
    //       path:"/analytics",
    //       name:"Analytics",
    //       icon:<FaRegChartBar/>
    //   },
      {
          path:"/leave",
          name:"Employee leave",
          icon:<FaCommentAlt/>
      },
      {
          path:"/e_chalan",
          name:"E_Chalan",
          icon:<FaShoppingBag/>
      },
      {
        path:"/logout",
        name:"Logout",
        icon:<BiLogOut/>
    }
  ]
  return (
      <div className="sidebar-container">
         <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
             <div className="top_section">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
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

export default Duty_head;