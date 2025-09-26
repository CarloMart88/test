import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo3.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <img className="logo" src={logo} alt="Logo" />
                <h1 className="open-sans-uniquifier orange">BOOLTRIP</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
