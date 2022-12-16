import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Tp_Home from './Component/Traffic_point/Tp_Home';
import Tp_head from './Component/Traffic_point/Tp_head';
import Tp_Profile from './Component/Traffic_point/Tp_Profile';

import Ai_Home from './Component/Area_incharge/Ai_Home';
import Ai_Profile from './Component/Area_incharge/Ai_Profile';
import Ai_SendMail from './Component/Area_incharge/Ai_SendMail';
import Ai_Force from './Component/Area_incharge/Ai_Force';
import Ai_Leave from './Component/Area_incharge/Ai_Leave';

import Login from './Component/Login';
import Logout from './Component/Logout';
//import Registretion from './Component/Registretion';


import Duty_Employee from './Component/Duty_employe/Duty_Employee';
import E_Chalan from './Component/Duty_employe/E_Chalan';
import Employee_leave from './Component/Duty_employe/Employee_leave';

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
      <Routes>
        
            <Route exact path='/tp' element={<Tp_Home />} />
            <Route exact path='/ai' element={<Ai_Home />} />
            <Route exact path='/aiprofile' element={<Ai_Profile />} />
            <Route exact path='/aisendmail' element={<Ai_SendMail />} />
            <Route exact path='/aiforce' element={<Ai_Force />} />
            <Route exact path='/aileave' element={<Ai_Leave />} />

            <Route exact path='/de' element={<Duty_Employee />} />
            <Route exact path='/e_chalan' element={<E_Chalan />} />
             <Route exact path='/leave' element={<Employee_leave />} />
            
            <Route exact path='/' element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/logout' element={<Logout />} />
            {/* <Route exact path='/registetion' element={<Registretion />} /> */}
            <Route exact path='/tpprofile' element={<Tp_Profile />} />
            
      </Routes>
    
 
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();