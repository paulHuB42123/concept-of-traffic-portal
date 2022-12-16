import React, {Components, useRef} from "react";
import Duty_head from './Duty_head';
import './Duty_Employee.css';
import emailjs from '@emailjs/browser';



function Duty_SendMail (){
  
    
  const form = useRef()
  
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0wjuq79', 'template_yd73wfe', form.current, 'yYUh7OZLb5geGiSs_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
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
      <div className="leave">
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
       <div class="container">
  <h2>Ask For Leave</h2>
  <form ref={form} onSubmit={sendEmail} action="" >
      <div>Name</div>
      <input type="text" name="user_name"  required></input>
      <div>Email</div>
      <input type="email" name="user_email" required></input>
      <div>Subject</div>
      <input type="text" name="subject" required></input>
      <div>Reason to Leave:</div>
      <textarea name="message"cols="30" rows="10" ></textarea>
      <button type="submit">Send</button>
  </form>
</div> 
   </Duty_head>

      

);
}
export default Duty_SendMail;