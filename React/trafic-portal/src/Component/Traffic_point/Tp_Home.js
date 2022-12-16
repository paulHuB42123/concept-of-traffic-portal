import React, {Components} from "react";
import Tp_head from './Tp_head';
import './Tp_Home.css'
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";



function tp_Home (){
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
     
            <Tp_head>
            <div className="container-parent">
                <div className="child-container-1 p-2 rounded">
                    <div className="container overflow-hidden text-center">
                        <div className="row gx-5">
                            <div className="col">
                            <div className="p-3 border bg-success text-white rounded">
                                <h3 className="fs-6">Total Employe</h3>
                                <h3>16</h3>
                            </div>
                            </div>
                            <div className="col">
                            <div className="p-3 border bg-success text-white rounded">
                                 <h3 className="fs-6">Available Employe</h3>
                                <h3>16</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr></hr>
                    <h1 className="fs-3 text-center">Today's Duty Employees</h1>

                        <table id="customers">
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        
                        </table>
                </div>
                <div className="child-container-2 rounded">
                <h1 className="fs-5 text-center">Today's Duty Employees</h1>

                    <table id="customers">
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>

                    </table>
                </div>
                <div className="child-container-3 rounded  d-flex justify-content-center">
                    
                    <div className="piechart">
                    <h3 className="text-center">Traffic point Pie chart</h3>
                        <Pie data={data}  />
                    </div>
                    
                </div>
                <div className="child-container-4 rounded d-flex justify-content-center">
                <div className="piechart">
                        <Bar data={data}  />
                    </div>
                </div>
            </div>
            </Tp_head>
            

    );
}
export default tp_Home;