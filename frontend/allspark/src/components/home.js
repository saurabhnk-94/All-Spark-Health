import React from "react";
import "./components.css";



class Home extends React.Component{
    render(){
        return (
            <div className="home-page">
                <div className="home-first">
                    <div style={{color:"white", marginTop:"100px", fontSize:"40px", marginLeft:"60%"}}>Enterprise scale AI Solutions</div>
                    <div style={{color:"#ffe5b4", marginTop:"50px", fontSize:"20px", marginLeft:"60%"}}>We build deep tech AI solutions for Enterprises to make <br />the operations autonomous.</div>
                    <div style={{width:"200px", height:"50px", backgroundColor:"#7f00ff",color:"white", marginTop:"50px", fontSize:"20px", marginLeft:"60%", textAlign:"center"}}>Contact US</div>
                </div>
                <div className="home-second">
                    <div style={{fontSize:"40px",  margin:"30px",marginLeft:"100px"}}>Enterprise scale AI Solutions</div>
                    <div style={{fontSize:"20px",  margin:"30px",marginLeft:"100px" ,color:"#000000"}}> providing AI solutions for healthcare to automate their day to day work and improve productivity</div>
                </div>
                <div className="home-third">
                    Enterprise scale AI Solutions
                </div>
                <div className="header-fourth">
                    Enterprise scale AI Solutions
                </div>
                <div className="header-fifth">
                    Enterprise scale AI Solutions
                </div>

            </div>
        )
    }
 }

 export default Home;