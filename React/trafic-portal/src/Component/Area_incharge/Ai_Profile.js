import React, {Components} from "react";
import Ai_head from './Ai_head';
import './Ai_Profile.css'
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";



function ai_Profile (){
    
    return(
     
        <Ai_head>
            <div class="container emp-profile">
            <form >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://bpa.police.gov.bd/uploads/faculties/20210623_1624422615.JPG" alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <br></br>
                                    <h5>
                                        Mostofa Ahmed
                                    </h5>
                                    <h6>
                                        Area Incharge
                                    </h6><hr></hr>
                             
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Change password"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>Area</p>
                            <a href="">Banani</a><br/>
                            <a href="">Baridhara</a><br/>
                            <a href="">Khilkhet</a>
                            
                        </div>
                    </div>
                    <div class="col-md-8" >
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>654634</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Mostofa Ahmed</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>mostofahmed@police.bd</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>0172233311</p>
                                            </div>
                                        </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </Ai_head>
            

    );
}
export default ai_Profile;