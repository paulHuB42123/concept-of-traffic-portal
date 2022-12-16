import React, {Components, useState, useEffect} from "react";
import Ai_head from './Ai_head';
import Axios from "axios"
import './Ai_Force.css'
//import Button from 'react-bootstrap/Button';



function Ai_Force (){
    const[data1, setData1]=useState([])

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8000/api/approveforce")
        .then(res => {
            console.log("ApproveForce",res.data);
            setData1(res.data)
        }).catch(err => {console.log(err);});

    },[]);

    const arr = data1.map((data, index) =>{
        return(
            <tr>
                <td>{data.tp_id}</td>
                <td>{data.tp_name}</td>
                <td>{data.tp_incharge_name}</td>
                <td><button type="button" class="btn btn-success">Approve</button></td>
                <td><button type="button" class="btn btn-danger">Cancel</button></td>
            </tr>
        )
    })

    
    return(
     
        <Ai_head>
            <h1 className="heading">Approve Force</h1>
            <table id="trafficpoint">
                        <tr>
                            <th>Area</th>
                            <th>Emloyee ID</th>
                            <th>Employee Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {arr}
                        
                    </table>
        </Ai_head>
            

    );
}
export default Ai_Force;