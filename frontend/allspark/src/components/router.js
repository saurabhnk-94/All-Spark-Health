import React from "react";
import About from "./about";
import Automation from "./automation";
import Mobile from "./mobile";
import Home from "./home";

import { Route } from "react-router-dom";



class BasicRouter extends React.Component{
    render(){
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/automation" component={Automation}></Route>
                <Route exact path="/mobile" component={Mobile}></Route>
            </div>
        )
    }
 }

 export default BasicRouter;