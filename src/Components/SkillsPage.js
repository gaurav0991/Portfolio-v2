import React from "react";
import { Col, Row } from "react-bootstrap";

function SkillsPage() {
  return (
    <div class="container mt-5" style={{ height: "80vh" }}>
      <Row>
        <Col>
          <h1>Skill Set</h1>
          Flutter
          <div class="bar advanced" data-skill="Flutter"></div>
          React Js
          <div class="bar back advanced" data-skill="React Js"></div>
          Node Js
          <div class="bar back intermediate" data-skill="Python"></div>
          Data Science
          <div class="bar back basic" data-skill="Data Science"></div>
        </Col>
        <Col>
          <h1>Languages</h1>
          <div className="lang">
            <div className="box-lang">C++</div>
            <div className="box-lang">Dart</div>
            <div className="box-lang">Python</div>
            <div className="box-lang">JavaScript</div>
          </div>
          <h1>Tools</h1>
          <div className="lang">
            <div className="box-lang">Github</div>
            <div className="box-lang">Firebase</div>
            <div className="box-lang">MongoDb</div>
            <div className="box-lang">Linux</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SkillsPage;
