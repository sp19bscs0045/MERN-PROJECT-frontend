import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"

export default function Navbar() {

  const [user, setUser] = useState(null);

  const getUser = () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject)
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const LocalUser = localStorage.getItem("user");
  console.log(LocalUser);
  console.log(user);

  const naviagte = useNavigate();

  const SignOut = () =>{
    if(user)
    {
      window.open("http://localhost:8080/auth/logout", "_self");
    }
    else if(LocalUser)
    {
      localStorage.clear();
      naviagte("/");
    }
    
  }

  return (
    <>
        {user ?(    
          <div className="navbar">

            <h1 style={{color:"white", textAlign:"center", paddingBottom:"20px"}}>JOB MANAGEMENT PORTAL</h1>

            <div style={{
                width:"250px", height:"70px",
                color:"white",textAlign:"center",
                display:"flex",
                marginTop: "10px",
                justifyContent:"center",
                alignItems:"center"
              }}>

              <h5 style={{fontWeight:"bolder",fontSize:"15px", marginLeft:"200px"}}>{user.userName} <br/> {user.email} </h5>
            </div>

            <img src={user.avatarUrl} 
            style=
            {{ 
              width:"50px",height:"50px",
              border: "none" ,borderRadius:"75px",
              display:"flex",
              justifyContent:"center", 
              alignItems:'center', 
              flexDirection:"row" ,
              marginTop: "5px",
              marginLeft:"80px",

            }}/>

            <button 
                style={{           
                  cursor: "pointer",
                  fontWeight: "bolder",fontSize:"15px",
                  border: "1px solid #999",
                  marginTop: "5px",
                  color: "#0980ff",
                  background: "white",
                  borderRadius: "5px",
                  width:"10%",
                  height:"40px",
                  marginRight:"150px",
                }}

              onClick={SignOut}>
              SignOut
            </button>
          </div>

        ): LocalUser ? (    

          <div className="navbar">

            <h1 style={{color:"white", textAlign:"center", paddingBottom:"20px"}}>JOB MANAGEMENT PORTAL</h1>

            <div style={{
                width:"250px", height:"70px",
                color:"white",textAlign:"center",
                display:"flex",
                marginTop: "10px",
                justifyContent:"center",
                alignItems:"center"
              }}>

              <h5 style={{fontWeight:"bolder",fontSize:"15px", marginLeft:"200px"}}>{JSON.parse(LocalUser).userName} <br/> {JSON.parse(LocalUser).email} </h5>
            </div>

            <button 
                style={{           
                  cursor: "pointer",
                  fontWeight: "bolder",fontSize:"15px",
                  border: "1px solid #999",
                  marginTop: "5px",
                  color: "#0980ff",
                  background: "white",
                  borderRadius: "5px",
                  width:"10%",
                  height:"40px",
                  marginRight:"150px",
                }}

              onClick={SignOut}> SignOut
            </button>
          </div>  
        ):(
        <>
        </>  
      )}

    </>

  )

}
