import React, {Components, useState, useEffect} from "react";
import Axios from "axios"
import Ai_head from './Ai_head';
import './Ai_Leave.css'
//import Button from 'react-bootstrap/Button';



function Ai_Leave (){
    const[data1, setData1]=useState([])

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8000/api/approveleave")
        .then(res => {
            console.log("ApproveLeave",res.data);
            setData1(res.data)
        }).catch(err => {console.log(err);});

    },[]);

    const arr = data1.map((data, index) =>{
        return(
            <tr>
                <td>{data.employee_id}</td>
                <td>{data.employee_name}</td>
                <td>{data.leave}</td>
                <td>{data.return}</td>
                <td><button type="button" class="btn btn-success">Approve</button></td>
                <td><button type="button" class="btn btn-danger">Cancel</button></td>
            </tr>
        )
    })
    
    return(
     
        <Ai_head>
            <h1 className="heading">Leave Appcation</h1>
            <table id="trafficpoint">
                        <tr>
                            <th>Emloyee ID</th>
                            <th>Employee Name</th>
                            <th>Leaving date</th>
                            <th>Back date</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {arr}
                        
                        
                    </table>
        </Ai_head>
            

    );
}
export default Ai_Leave;