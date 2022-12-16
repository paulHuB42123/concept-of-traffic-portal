import React, {Components} from "react";
import Duty_head from './Duty_head';
import './Duty_Employee.css'

import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


function duty_Employee (){
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
                    <h1 className="fs-3 text-center">Enter E-Chalan: </h1>

                    <div className=" container">
                    <label >
                         Name:
                    <input type="text" name="name" />
                     </label>
                     
                     
                    <label >
                    Transport:
                    <input type="text" name="transport" />
                     </label>
                     
                     
                    <label >
                    Vechical No:
                    <input type="text" name="vechical_no:" />
                     </label>
                    
                     
                    <label >
                         Crime:
                    <input type="text" name="Crime" />
                     </label>
                     
                     
                    <label >
                         Fee:
                    <input type="text" name="fee" />
                     </label>
                    <br></br>
                    <input type="submit" value="Submit" />
                    </div>
                        <div className="child-container-2 rounded">
                
                

                
                <h1 className="fs-5 text-center">E-Chalan</h1>

                    <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Transport</th>
                        <th>Vechical No</th>
                        <th>Crime</th>
                        <th>Fee</th>
                    </tr>

                    <tr>
                        <td>Paul</td>
                        <td>Bike</td>
                        <td>42456789G</td>
                        <td>Speed Limit</td>
                        <td>500tk</td>
                    </tr>
                    

                    </table>
                </div>
                
                </div>
                
            </div>
            </Duty_head>
            

    );
}
export default duty_Employee;