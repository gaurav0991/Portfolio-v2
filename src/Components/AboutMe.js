import React from "react";
import { Col, Row } from "react-bootstrap";
import pp from "../pp (1).jpg";
import myim from "../myimg.png";

function AboutMe() {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <Row>
        <Col lg={7}>
          <Row className="pl-0 ml-0">
            <h4>01.</h4>
            <h4 style={{ color: "#e6f1ff" }}>About Me</h4>
            <div
              style={{
                borderColor: "#8892b0",
                marginTop: "15px",
                marginLeft: "10px",
                width: "260px",
                borderTop: "2px solid #8892b0",
              }}
            ></div>
          </Row>
          <div className="content ml-0 pl-0">
            Hello ! I'm Gaurav Saraf a software engineer from Mumbai.
            <br />
            I like coding and football . My goal is to learn deep learning and
            making amazing and helpful applications.I like to build websites and
            apps which have good quality performance.
            <br />I am currently a 3rd year B.Tech Student at{" "}
            <span style={{ color: "#64ffda" }}>KIIT UNIVERSITY</span> with a
            cumilative CGPA of <span style={{ color: "#64ffda" }}>8.8</span> and
            i would further like to improve my weakness
            <br />
            <br />
            Here are some of my skills . Hope you like it
          </div>
          <br />
          <ul className="list-skills">
            <li>Javascript (ES6+)</li>
            <li>Flutter</li>

            <li>React Js</li>
            <li>Node Js</li>
            <li>C++</li>
          </ul>
        </Col>
        <Col lg={1}></Col>
        <img src={myim} height="200px" width="200px" />
      </Row>
    </div>
  );
}

export default AboutMe;
