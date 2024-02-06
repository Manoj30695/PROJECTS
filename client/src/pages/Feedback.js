import React from 'react'  
import emailjs from 'emailjs-com'  
const feed = () => {  
    function sendEmail(e){  
        e.preventDefault();  
  
        emailjs.sendForm("service_tuyf5ak","template_m8uuwmc",e.target,"bdYGoJYiTqbLwqgtr"  
        ).then(res=>{  
            console.log(res)  
            alert("sent");  
        }).catch(err=> console.log(err));  
    }  
  return (  
    <center>  
    <div className="cotainer border"  
    style={{marginTop:"50px",   
    width:"50%",    
    backgroundposition:"center",  
    backgroundSize:"cover",  
}}  
     >  
         
      <h1> Feedback Form</h1>  
      <form onSubmit={sendEmail}>  
        <label>name </label>  
        <input type="text" name="name"/>  
        <br/>  
        <br/>  
        <label>Email </label>  
        <input type="email" name="useremail"/>  
        <br/>  
        <br/>  
        <label>Message </label>  
        <textarea name='message' rows='3'/> 
         
        <input type='submit' value='send'/>  
  
      </form>  
        
    </div> 
    </center>  
      
  )  
}  
  
export default feed