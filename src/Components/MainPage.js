import React from "react";

function MainPage(props) {
  return (
    <>
      <div className="sideicons">
        <i class="fab fa-github fa-1x"></i>
        <br />
        <i class="fab fa-instagram fa-1x"></i>
        <br />

        <i class="fab fa-facebook fa-1x"></i>
        <br />

        <i class="fab fa-linkedin fa-1x"></i>
        <br />
        <div className="vert pt-2"> </div>
      </div>
      <center
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          marginTop: "15%",
        }}
      >
        <div className="container mt-5" style={{ height: "100vh" }}>
          <h6 style={{ margin: "0 0 10px 4px" }}>Hi, my name is </h6>
          <h1 style={{ color: "#e6f1ff", fontSize: "3rem" }}>Gaurav Saraf</h1>
          <h3 style={{ color: "#8892b0", fontSize: "2rem", lineHeight: "0.9" }}>
            &nbsp;I am third year B.Tech student
          </h3>
          <p style={{ color: "#e6f1ff" }}>
            &nbsp;&nbsp;I AM A MERN STACK AND FLUTTER DEVELOPER FROM KIIT
            UNIVERSITY,BHUBNESHWAR,INDIA.
          </p>
        </div>
      </center>
    </>
  );
}

export default MainPage;
