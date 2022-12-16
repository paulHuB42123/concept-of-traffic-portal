import React, {Components, useRef} from "react";
import Ai_head from './Ai_head';
import './Ai_SendMail.css'
import emailjs from '@emailjs/browser';



function Ai_SendMail (){
    
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
   
    return(
     
        <Ai_head>
            
             <div class="container">
        <h2>Send Email</h2>
        <form ref={form} onSubmit={sendEmail} action="" >
            <div>Name</div>
            <input type="text" name="user_name"  required></input>
            <div>Email</div>
            <input type="email" name="user_email" required></input>
            <div>Subject</div>
            <input type="text" name="subject" required></input>
            <div>Type your message here</div>
            <textarea name="message"cols="30" rows="10" ></textarea>
            <button type="submit">Send</button>
        </form>
    </div> 
         </Ai_head>

            

    );
}
export default Ai_SendMail;