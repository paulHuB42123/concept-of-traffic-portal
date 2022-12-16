import React, { Components ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registretion = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    let[role, setRole] =useState("");
    const navigate = useNavigate();

    const RegSubmit= ()=>{

        // if(name === '')
        // {
        //     Setnameerror("Email Feild Required");
        // }
        // if(password === '')
        // {
        //     Setpasserror("Passowrd Feild Required");
        // }
        // else{
        //     Setpasserror("");
        //     Setnameerror("");
        // }
        var obj = {email: name, password: password,role:role};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/registetion",obj)
        .then(resp=>{
            // var token = resp.data;
            // console.log(token);
            // var user = {emplyee_id: token.emplyee_id, access_token:token.token_key,role:token.role};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            // if(token == "invalid usser name or Password"){
            //     navigate('/login');
            // }else{
                navigate('/login');
            //}
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div className="d-flex justify-content-center">
            <div className="from-group">
            <form>
            <label className="form-label">Enter Email</label>
                <input className="form-control" type="email" value={name} onChange={(e)=>setName(e.target.value)}></input>
                
                <label className="form-label">Enter Password</label>
                <input className="form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <label className="form-label">Enter role</label>
                <input className="form-control" type="password" value={role} onChange={(e)=>setRole(e.target.value)}></input>
               
            </form>
                <button className="btn btn-success mt-2" onClick={RegSubmit}>SignUp</button>
        </div>
        </div>
        

    )
}
export default Registretion;  