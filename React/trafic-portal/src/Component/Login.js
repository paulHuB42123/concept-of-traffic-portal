import React, { Components ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[nameerror, Setnameerror] = useState("");
    let[passerror, Setpasserror] = useState("");
    let[invaliderror, Setinvaliderror] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{

        if(name === '')
        {
            Setnameerror("Email Feild Required");
        }
        if(password === '')
        {
            Setpasserror("Passowrd Feild Required");
        }
        else{
            Setpasserror("");
            Setnameerror("");
        }
        var obj = {email: name, password: password};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {emplyee_id: token.emplyee_id, access_token:token.token_key,role:token.role};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(token == "invalid usser name or Password"){
                navigate('/login');
                
                Setinvaliderror("Invalid Email or Password");
            }else{
                if(user.role=="ai"){
                    navigate('/ai');
                }
                if(user.role=="tp"){
                    navigate('/tp');
                }
                if(user.role=="de"){
                    navigate('/de');
                }
            }
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div class="loginBox">
            <h2>Login</h2>
        
            
            <form>
                <p>Email</p>
                <input  type="email" placeholder="Enter Email" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <p className="text-danger">{nameerror}</p>
                <p>Password</p>
                <input  type="password" placeholder="******" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <p className="text-danger">{passerror}</p>
            </form>
            <p className="text-danger">{invaliderror}</p>
                <button onClick={loginSubmit}>Login</button>
        </div>


        

    )
}
export default Login;  