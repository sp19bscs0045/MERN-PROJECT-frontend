import React from 'react';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Toast Functions
  const notifyError=(msg)=> toast.error(msg);
  const notifySuccess=(msg)=> toast.success(msg);

  //Email and Password Regex
  const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


  const postData=()=>{

    //Checking email and password
    if(!emailRegex.test(email))
    {
        notifyError("Invalid Email");
        return
    }
    else if(!passwordRegex.test(password))
    {
        notifyError("Password must contain atleast eight characters, including numbers and special characters");
        return
    }

    //Sending Data To Server
    fetch("http://localhost:8080/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            userName: userName,
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
            notifySuccess(data.message)
            navigate('/')
        }
        
        console.log(data)
    })
}

  return (
    <div className='container'>
        <div className='form-box'>
            <h1>SignIn</h1>
            <input type='text' className='input-field' value={userName} name='userName' placeholder='User Name' onChange={(e)=>{setUserName(e.target.value)}}/>
            <br/>
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
            
            onClick={postData}>Sign Up</button>
            <br/>
            <p>Already have an account? <Link to="/"><strong>Sign In</strong></Link></p>
        </div>
    </div>
  )
}
