import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div>AllSPARK</div>
                    <div>HEAL<span>+</span>H</div>
                </div>
                <div className="header-right">
                    <NavLink to="/about" style={{textDecoration:"none"}}>
                        About
                    </NavLink>
                    <NavLink to="/automation" style={{textDecoration:"none"}}>
                        AI AUTOMATION
                    </NavLink>
                    <NavLink to="/mobile" style={{textDecoration:"none"}}>
                        Mobile Health
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Header;