import React, {Components, useState, useEffect} from "react";
import Duty_head from './Duty_head';
import './Duty_Employee.css'
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Axios from "axios"



function Duty_Employee (){
    

    const[data2, setData]=useState([])

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8000/api/de")
        .then(res => {
            console.log("DutyList",res.data);
            setData(res.data)
        }).catch(err => {console.log(err);});

    },[]);
    const arr = data2.map((data, index) =>{
        return(
            <tr>
                <td>{data.d_id}</td>
                <td>{data.date}</td>
                <td>{data.schedule_name}</td>
               
            </tr>
        )
    })
    const data = {
        labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
        datasets: [
          {
            label: "# of Votes",
            data: [35, 25, 22, 20, 18, 15],
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
              "#F7E018",
              "#fff",
              "#FE452A",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
     
            <Duty_head>
            <div className="container-parent">
                <div className="child-container-1 p-2 rounded">
                    <div className="container overflow-hidden text-center">
                        <div className="row gx-5">
                            <div className="col">
                            <div className="p-3 border bg-success text-white rounded">
                                <h3 className="fs-6">Employee Daily Duty</h3>
                                <h3 className="fs-6">8am to 12pm</h3>
                                <h3>ECB Chattar</h3>
                            </div>
                            </div>
                            <div className="col">
                            <div className="p-3 border bg-success text-white rounded">
                                 <h3 className="fs-6">Employee's Profile</h3>
                                <h3>Picture</h3>
                                <h3>Name</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr></hr>
                    <h1 className="fs-3 text-center">Week Schedule</h1>

                        <table id="customers">
                        <tr>
                            <th>Day</th>
                            <th>Traffic Point</th>
                            <th>Schedule</th>
                        </tr>
                        {arr}
                        
                        </table>
                </div>
                <div className="child-container-2 rounded">
                <div className="p-3 border bg-success text-white rounded">
                <h1 className="fs-5 text-center">Traffic Incharge's Information</h1>
                <h3 className="fs-5 text-center"> Traffic  Incharge's Picture</h3>
                <h3 className="fs-5 text-center">Name: Mr. Paul</h3>
                <h3 className="fs-5 text-center">Phone Number: 01786545451</h3>
                </div>
                

                <div className="p-3 border bg-success text-white rounded">
                <h1 className="fs-5 text-center">Area Incharge</h1>
                <h3 className="fs-5 text-center"> Area Incharge's Picture</h3>
                <h3 className="fs-5 text-center">Name: Mr. Paul</h3>
                <h3 className="fs-5 text-center">Phone Number: 01786545451</h3>
                </div>
                
                </div>

                
                <div className="child-container-3 rounded  d-flex justify-content-center">
                    
                    <div className="piechart">
                    <h3 className="text-center">E-Chalan</h3>
                        <Pie data={data}  />
                    </div>
                    
                </div>
                <div className="child-container-4 rounded d-flex justify-content-center">
                <div className="piechart">
                        <Bar data={data}  />
                    </div>
                </div>
            </div>
            </Duty_head>
            

    );
}
export default Duty_Employee;