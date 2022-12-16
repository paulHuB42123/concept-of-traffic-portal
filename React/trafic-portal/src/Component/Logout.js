import React, { Component } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{

    const navigate = useNavigate();
    var obj = localStorage.getItem('user');
    console.log(obj);
    axios.post("http://127.0.0.1:8000/api/logout",obj)
        .then(resp=>{
           
            localStorage.removeItem('user');
            console.log(resp);
            navigate('/login');
        }).catch(err=>{
            console.log(err);
        });
   
    return (
       
            <div></div>
        
      
    )
  
}
export default Logout;  
