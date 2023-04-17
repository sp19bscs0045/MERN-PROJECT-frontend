import React from "react";

const Card = () => {
  return (
    <div style={{ width: "300px", height: "310px", color: "#3b4f50", backgroundColor: "white", borderRadius: "10px" }}>
      <h5 style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "15px", marginBottom: "5px", color: "black" }}>MERN Stack Developer</h5>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "15px", marginRight: "30px", textAlign: "left" }}>Company: Contour Software</p>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "10px", marginRight: "30px", textAlign: "left" }}>Job Type: Onsite</p>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "10px", marginRight: "30px", textAlign: "left" }}>Location: Karachi</p>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "10px", marginRight: "30px", textAlign: "left" }}>Salary: 50,000 - 70,000</p>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "10px", marginRight: "30px", textAlign: "left" }}>No. of Applicants: 04</p>
      <p style={{ fontWeight: "bold", height: "20px", fontSize: "15px", marginLeft: "30px", marginTop: "10px", marginRight: "30px", textAlign: "left" }}>Experience Required: 04 years</p>

      <button
        style={{
          cursor: "pointer",
          fontWeight: "bolder",
          height: "30px",
          width: "80px",
          fontSize: "15px",
          border: "none",
          color: "white",
          background: "linear-gradient(#2dceff,#0980ff)",
          borderRadius: "5px",
          marginLeft: "30px",
          marginTop: "0px",
          marginRight: "30px",
          textAlign: "center",
        }}
      >
        Details
      </button>
      <button
        style={{
          cursor: "pointer",
          fontWeight: "bolder",
          height: "30px",
          width: "90px",
          fontSize: "15px",
          border: "none",
          color: "white",
          background: "linear-gradient(#2dceff,#0980ff)",
          borderRadius: "5px",
          marginLeft: "30px",
          marginTop: "0px",
          marginRight: "30px",
          textAlign: "center",
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

const CardsRow = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "inherit", gap: "10px" }}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsRow;
