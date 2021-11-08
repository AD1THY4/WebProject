import React from "react";
import "./index.css";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            class="image"
            src={require("../../images/logo192.png")}
            height="30px"
            alt="logo"
          />
        </NavLink>
        <Bars className="NavLink" />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/Achievements" activeStyle>
            Achievements
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
