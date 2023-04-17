import React from 'react';
import { useEffect, useState } from "react";
import Tick from "../images/tick.png";
import List from "../images/folder.jpg";
import Offers from "../images/offer.png";
import JobPost from "../images/post.png";
import Navbar from "../components/Navbar";


export default function Profile() {

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
  console.log(user)

  return (
    <>
    <Navbar/>

    <div style={{background: "#e7e7e7",height:"100%", display:"flex"}} >

      {user || LocalUser ? (
        <>
        <br/>

        <div style={{marginTop:"5px",marginBottom:"300px",display:"flex", flexDirection:"column", justifyContent:"center",marginRight:"30px", width:"200px", alignItems:"flex-start", gap:"10px"}}>

          <div style={{width:"220px", height:"250px",color:"#3b4f50",backgroundColor:"white",borderRadius:"20px"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Filter by Salary</h5>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>40,000 - 60,000</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>60,000 - 80,000</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>80,000 - 100,000</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>100,000 - 120,000</p>

            <button
                style={{
                cursor: "pointer",
                fontWeight: "bolder",height:"30px",width: "80px",
                fontSize: "15px",
                border: "none",
                color: "white",
                background: "linear-gradient(#2dceff,#0980ff)",
                borderRadius: "5px",
                marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                }}>
                Search
            </button>
          </div>

          <div style={{width:"220px", height:"250px",color:"#3b4f50",backgroundColor:"white",borderRadius:"20px"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Filter by Location</h5>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Karachi</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Islamabad</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Lahore</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Others</p>

            <button
                style={{
                cursor: "pointer",
                fontWeight: "bolder",height:"30px",width: "80px",
                fontSize: "15px",
                border: "none",
                color: "white",
                background: "linear-gradient(#2dceff,#0980ff)",
                borderRadius: "5px",
                marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                }}>
                Search
            </button>
          </div>

          <div style={{width:"220px", height:"250px",color:"#3b4f50",backgroundColor:"white",borderRadius:"20px"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Filter by Job-Type</h5>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Onsite</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Remote</p>
            <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"center", border:"1px solid", borderRadius:"5px"}}>Hybrid</p>

            <button
                style={{
                cursor: "pointer",
                fontWeight: "bolder",height:"30px",width: "80px",
                fontSize: "15px",
                border: "none",
                color: "white",
                background: "linear-gradient(#2dceff,#0980ff)",
                borderRadius: "5px",
                marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                }}>
                Search
            </button>
          </div>

        </div>

        <div style={{marginTop:"0px",marginBottom:"300px", flexDirection:"column", justifyContent:"center",width:"80%", alignItems:"flex-start", gap:"10px"}}>

        {/* <div style={{display:"flex",justifyContent:"center",height:"380px", alignItems:"center"}}> */}

          <div style={{marginTop:"10px", marginBottom:"10px", display:"flex", flexDirection:"row", justifyContent:"center",width:"100%", alignItems:"inherit", gap:"10px"}}>

            <div style={{ width:"250px", height:"100px",color:"black",backgroundColor:"white",borderRadius:"10px"}}>
                
              <button
              style={{           
                fontWeight:"bold",
                cursor: "pointer",
                color: "#3ae410",
                border:"none",
                background:"white",
                borderRadius: "10px",
                textAlign:"center",
                fontSize:"20px",
              }}>
              <img src={Tick} alt=" " className="tickImg" /> Job Applied   12 </button>    

            </div>
            <div style={{ width:"250px", height:"100px",color:"black",backgroundColor:"white",borderRadius:"10px"}}>
                
              <button
              style={{           
                fontWeight:"bold",
                cursor: "pointer",
                color: "#0980ff",
                border:"none",
                background:"white",
                borderRadius: "10px",
                textAlign:"center",
                fontSize:"20px",
              }}>
              <img src={List} alt=" " className="tickImg" /> Saved Jobs   18 </button>    

            </div>
            <div style={{ width:"250px", height:"100px",color:"black",backgroundColor:"white",borderRadius:"10px"}}>
                
              <button
              style={{           
                fontWeight:"bold",
                cursor: "pointer",
                color: "#ffbb00",
                border:"none",
                background:"white",
                borderRadius: "10px",
                textAlign:"center",
                fontSize:"20px",
              }}>
              <img src={Offers} alt=" " className="tickImg" /> Job Offers   04 </button>    

            </div>          
            <div style={{ width:"250px", height:"100px",color:"black",backgroundColor:"white",borderRadius:"10px"}}>
                
              <button
              style={{           
                fontWeight:"bold",
                cursor: "pointer",
                color: "#db3744",
                border:"none",
                background:"white",
                borderRadius: "10px",
                textAlign:"center",
                fontSize:"20px",
              }}>
              <img src={JobPost} alt=" " className="tickImg" /> Post a Job    00 </button>    

            </div>          

          </div>


          <div style={{marginTop:"20px", display:"flex", flexDirection:"row", justifyContent:"space-around",width:"100%", alignItems:"inherit", gap:"10px"}}>

            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>MERN Stack Developer</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>

            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Jr. QA manual Testing</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>
            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>QA Automation Analyst</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>

          </div> 

          <div style={{marginTop:"40px", display:"flex", flexDirection:"row", justifyContent:"space-around",width:"100%", alignItems:"inherit", gap:"10px"}}>

            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Java Developer</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>

            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>React Js Developer</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>
            <div style={{width:"300px", height:"310px",color:"#3b4f50",backgroundColor:"white",borderRadius:"10px"}}>
              <h5 style={{fontWeight:"bolder",fontSize:"20px", marginTop:"15px",marginBottom:"5px", color:"black"}}>Full Stack Developer</h5>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"15px", marginRight:"30px",textAlign:"left"}}>Company: Contour Software</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Job Type: Onsite</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Location: Karachi</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Salary: 50,000 - 70,000</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>No. of Applicants: 04</p>
              <p style={{fontWeight:"bold",height:"20px", fontSize:"15px", marginLeft:"30px", marginTop:"10px", marginRight:"30px",textAlign:"left"}}>Experience Required: 04 years</p>

              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "80px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Details
              </button>
              <button
                  style={{
                  cursor: "pointer",
                  fontWeight: "bolder",height:"30px",width: "90px",
                  fontSize: "15px",
                  border: "none",
                  color: "white",
                  background: "linear-gradient(#2dceff,#0980ff)",
                  borderRadius: "5px",
                  marginLeft:"30px", marginTop:"0px", marginRight:"30px",textAlign:"center",
                  }}>
                  Apply Now
              </button>

            </div>

            </div> 

        </div>

        </>
      ): (
        <>
          <h1>Loading User...</h1>
        </>
      )}

    </div>
    </>
  )
}
