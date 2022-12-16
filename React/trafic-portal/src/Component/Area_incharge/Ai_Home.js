import React, {Components, useState, useEffect} from "react";
import Ai_head from './Ai_head';
import './Ai_Home.css'
import Axios from "axios"
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

function Ai_Home (){

    
    const myData = {
        labels: ["Morning", "Afternoon", "Night"],
        data: [
          {
            label: "# of Votes",
            data: [35, 25, 22],
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

    const[data1, setData1]=useState([])

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8000/api/ai")
        .then(res => {
            console.log("TrafficPoint",res.data);
            setData1(res.data)
        }).catch(err => {console.log(err);});

    },[]);

    const arr = data1.map((data, index) =>{
        return(
            <tr>
                <td>{data.tp_id}</td>
                <td>{data.tp_name}</td>
                <td>{data.tp_incharge_name}</td>
                <td><button onClick={() => (data.tp_id)} class="btn btn-outline-secondary">View</button></td>
            </tr>
        )
    })


    //const handletp=id
    const[data2, setData2]=useState([])

    useEffect(()=>{
        Axios.post("http://127.0.0.1:8000/api/ai/demploye/3")
        .then(res => {
            console.log("TrafficPoint",res.data);
            setData2(res.data)
        }).catch(err => {console.log(err);});

    },[]);
    const arr2 = data2.map((data, index) =>{
        return(
            <tr>
                <td>{data.emplyee_id}</td>
                <td>{data.employe_name}</td>
                <td>{data.status}</td>
            </tr>
        )
    })
    const data = {
        labels: ["Morning", "Afternoon", "Night"],
        datasets: [
          {
            
            data: [29, 45, 22],
            label: "mornig",
            label: "# of Votes",
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
            ]
          },
        ],
      };
    
    return(
     
            <Ai_head>
            <div className="container-parent">
                <div className="child-container-1 p-2 rounded">                    
                    <hr></hr>
                    <h1 className="fs-3 text-center">Details of Employees</h1>
                    <hr></hr>

                        <table id="trafficpoint">
                        <tr>
                            <th>Traffic Point ID</th>
                            <th>Trafficpoint Name</th>
                            <th>Traffic point Incharge</th>
                            <th></th>
                        </tr>
                        {arr}
                        
                        </table>
                </div>
                <div className="child-container-2 rounded">
                    <hr></hr>
                <h1 className="fs-5 text-center">Details of Employees</h1>
                <hr></hr>

                    <table id="trafficpoint">
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Status</th>
                    </tr>
                    {arr2}

                    </table>
                </div>
                <div className="child-container-3 rounded  d-flex justify-content-center">
                    
                    <div className="piechart">
                    <h3 className="text-center">Area based</h3>
                    <Bar data={data}  />
                    </div>
                    
                </div>
                <div className="child-container-4 rounded d-flex justify-content-center">
                <div className="piechart">
                <Line data={data}  />
                    </div>
                </div>
            </div>
            </Ai_head>
            

    );
}
export default Ai_Home;