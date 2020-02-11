import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-block">
        <div className="footer-first">
         
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              About
            </NavLink>
       
        <div>@2020 All Spark Technology</div>
        </div>
        <div className="footer-first">
          <div>AllSparkTechnologies.in</div>
        </div>
        <div className="footer-first">
          <div>Stay Connected</div>
          <div>
            Join our newsletter to receive our Technology <br />
            solutions letters by clicking on contact us.
          </div>
          <div>AllSparkTechnologies.in</div>
        </div>
        <div className="footer-first">
          <a href="https://www.allsparkhealth.com/">
            AllSpark Health Labs Bangalore
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
