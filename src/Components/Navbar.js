import React from "react";
import { img } from "../pp (1).jpg";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import pp from "../pp (1).jpg";

import "./Sidebar.css";
function NavBar() {
  return (
    <>
      <Navbar className="justify-content-between">
        <Navbar.Brand href="">
          {" "}
          <img
            src={pp}
            height="60px"
            width="60px"
            style={{ borderRadius: "50%" }}
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{ color: "#64ffda", fontSize: "1rem" }}>
            About{" "}
          </Nav.Link>
          <Nav.Link style={{ color: "#64ffda", fontSize: "1rem" }}>
            Skills{" "}
          </Nav.Link>
          <Nav.Link style={{ color: "#64ffda", fontSize: "1rem" }}>
            Experience{" "}
          </Nav.Link>

          <Nav.Link style={{ color: "#64ffda", fontSize: "1rem" }}>
            Contact me{" "}
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
