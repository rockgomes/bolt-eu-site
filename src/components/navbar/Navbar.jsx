import React from "react";
import "./navbar.css";
import { FaAngleDown, FaBars } from "react-icons/fa";

const Menu = () => (
  <>
    <p>
      <a href="#products">
        Products <FaAngleDown />
      </a>
    </p>
    <p>
      <a href="#partner">
        Partner with Bolt <FaAngleDown />
      </a>
    </p>
    <p>
      <a href="#company">
        Company <FaAngleDown />
      </a>
    </p>
    <p>
      <a href="#support">Support</a>
    </p>
    <p>
      <a href="#cities">
        Cities <FaAngleDown />
      </a>
    </p>
  </>
);

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__topbar">
        <div className="navbar__topbar-content">
          <p>
            Partner with Bolt as a: <strong>Driver </strong>
            <strong>Fleet partner </strong>
            <strong>Courier </strong>
            <strong>Restaurant or Store</strong>
          </p>
        </div>
      </div>
      <div className="navbar__links">
        <div className="navbar__links-content">
          <div className="navbar__links-menu">
            <FaBars />
          </div>
          <div className="navbar__links-logo"></div>
          <div className="navbar__links-container">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
