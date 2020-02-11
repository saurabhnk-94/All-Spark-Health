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
       
        <div style={{color:"#00008b"}}>@2020 All Spark Technology</div>
        </div>
        <div className="footer-first">
          <div style={{color:"#00008b", fontSize:"20px"}}>AllSparkTechnologies.in</div>
        </div>
        <div className="footer-first">
          <div style={{color:"#00008b", fontSize:"20px"}}>Stay Connected</div>
          <div style={{padding:"10px", paddingLeft:0}}>
            Join our newsletter to receive our Technology <br />
            solutions letters by clicking on contact us.
          </div>
          <div style={{color:"#00008b", fontSize:"20px"}}>AllSparkTechnologies.in</div>
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
