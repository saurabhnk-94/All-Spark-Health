import React from "react";
import "./components.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-first">
          <div
            style={{
              color: "white",
              marginTop: "100px",
              fontSize: "40px",
              marginLeft: "60%"
            }}
          >
            Enterprise scale AI Solutions
          </div>
          <div
            style={{
              color: "#ffe5b4",
              marginTop: "50px",
              fontSize: "20px",
              marginLeft: "60%"
            }}
          >
            We build deep tech AI solutions for Enterprises to make <br />
            the operations autonomous.
          </div>
          <div
            style={{
              width: "200px",
              height: "50px",
              backgroundColor: "#7f00ff",
              color: "white",
              marginTop: "50px",
              fontSize: "20px",
              marginLeft: "60%",
              textAlign: "center"
            }}
          >
            Contact US
          </div>
        </div>
        <div className="home-second">
          <div
            style={{ fontSize: "40px", margin: "30px", marginLeft: "100px" }}
          >
            Enterprise scale AI Solutions
          </div>
          <div
            style={{
              fontSize: "20px",
              margin: "30px",
              marginLeft: "100px",
              color: "#000000"
            }}
          >
            {" "}
            providing AI solutions for healthcare to automate their day to day
            work and improve productivity
          </div>
        </div>
        <div className="home-third">
          <div>ICON</div>
          <div style={{ fontSize: "20px", padding: "10px", color: "#00008b" }}>
            Improves productivity of the healthcare organizations
          </div>
          <div style={{ color: "black", fontSize: "18px" }}>
            When over 70% of the daily operations are autonomously handled, the
            staff get a lot of time to do what they do the <br />
            best, deliver care.
          </div>
        </div>
        <div className="home-fourth">
          <div>ICON</div>
          <div style={{ fontSize: "20px", padding: "10px", color: "#00008b" }}>
            Saving Operational Costs
          </div>
          <div style={{ color: "black", fontSize: "18px" }}>
            Study states that each year healthcare needs to hire 12% more staff
            to cater to the increase in demand of patients.
            <br /> This can save millions each year on operational costs.
          </div>
        </div>
        <div className="home-fifth">
          <div style={{ fontSize: "40px", color: "gray" }}>
            Contact us for AI enterprise solutions.
          </div>
          <button
            style={{
              width: 200,
              height: 50,
              border: "none",
              marginLeft: "50px",
              backgroundColor: "#00008b",
              color: "white"
            }}
          >
            CONTACT US
          </button>
        </div>
        <div className="home-sixth">
          <div style={{display:"flex", justifyContent:"flex-start", marginLeft:"29%", fontSize:"40px"}}>Hear what our enterprise clients say</div>
          <div className="cards-display">
            <div className="card-details">
              <div style={{fontSize:"30px", color:"#FO5E23"}}>Operations head</div>
              <p style={{width: "95%" , fontSize:"20px"}}>
                We strive to bring in more an more better ways to improve the
                patient experience and no doubts All spark is clearly a solution
                which is tremendously increasing the px
              </p>
              <div style={{fontSize:"30", color:"red"}}>ICON</div>
            </div>
            <div className="card-details">
              <div style={{fontSize:"30px", color:"#FO5E23"}}>Digital Marketing Head</div>
              <p style={{width: "95%" , fontSize:"20px"}}>
                Beyond the hype of AI we were looking to integrate a solution
                where the patients have better access to our healthcare
                services. All Spark delivered exactly that in just under a few
                weeks the results were clear.
              </p>
              <div style={{fontSize:"30", color:"red"}}>ICON</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
