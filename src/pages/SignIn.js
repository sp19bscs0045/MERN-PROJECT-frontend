import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LinkedIn from "../images/linkedIn.png";

export default function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Toast Functions
    const notifyError=(msg)=> toast.error(msg);
    const notifySuccess=(msg)=> toast.success(msg);

    //Email Regex
    const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const postData=(e)=>{
        e.preventDefault();
      //Checking email and password
      if(!emailRegex.test(email))
      {
          notifyError("Invalid Email");
          return
      }

      //Sending Data To Server
      fetch("http://localhost:8080/auth/signin",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email: email,
              password: password

          })
      }).then(res=>res.json())
        .then(data=>{
          if(data.error)
          {
              notifyError(data.error)
          }
          else
          {
              //notifySuccess(data.message)
              notifySuccess("Signed In Successfully")
               console.log(data)
               localStorage.setItem("jwt", data.token)
               localStorage.setItem("user", JSON.stringify(data.user))
               //setUserLogin(true)
                navigate('/profile')
          }
          
          console.log(data)
      })
  }

  const linkedin = () => {
    window.open("http://localhost:8080/auth/linkedin", "_self");
    
  };

  return (

    <div className='container'>
      <div className='form-box'>
          <h1>SignIn</h1>
          <input type='email' className='input-field' value={email} name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <input type='password' className='input-field' value={password} name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/>

          <button
          style={{           
            cursor: "pointer",
            fontWeight: "bolder",fontSize:"15px",
            border: "1px solid #999",
            marginTop: "5px",
            color: "white",
            background: "linear-gradient(#2dceff,#0980ff)",
            borderRadius: "5px",
            width:"40%",
            height:"30px",
            
          }}
          onClick={postData}>Sign In</button>
          <br/>
          <p>Don't have an account? <Link to="/signup"><strong>Sign Up</strong></Link></p>
          
          <h4>OR</h4>
          
          <button
          style={{           
            cursor: "pointer",
            fontWeight: "bolder",
            border: "1px solid #999",
            color: "white",
            background: "linear-gradient(#2dceff,#0980ff)",
            borderRadius: "5px",
            width:"70%",
            height:"30px",
            textAlign:"left",
            marginBottom:"5px",
            fontSize:"15px",
          }}
          onClick={() => { linkedin(); notifySuccess("SignedIn Successfully") }}>
          <img src={LinkedIn} alt=" " className="icon" />  
          Sign In With LinkedIn</button>        
      </div>
      
    </div>
  )
}
