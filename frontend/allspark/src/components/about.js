import React from "react";
import "./components.css";


class About extends React.Component {


  componentDidMount() {
    document.title = 'About | All Spark Health</title'
  }

  render() {
    return (
      <div className="about-page">
        <div className="about-first">
          <h1 style={{ color: "#A9A9A9" }}>
            <i>OUR STORY</i>
          </h1>
          <div style={{ width: "40%", fontSize: "20px" }}>
            <i>
              <strong>We are a technology</strong>
            </i>{" "}
            company which is building enterprise solutions to automate redundant
            daily works, especially operations. We are a team of passionate
            people who want to democratize the AI usage in Enterprise in all the
            sectors.
          </div>
        </div>
        <div className="about-second">
          <h1>Would like to join our team?</h1>

          <div className="about-joining">
            <div className="cards">
              <h4 style={{ color: "blue", fontSize: "20px" }}>Doctors</h4>
              <div style={{ padding: "20px", paddingLeft: 0 }}>
                We are looking for General Medicine MD doctors to join our team.
                Please ping us with your resume on
              </div>
              <button
                style={{
                  width: "40%",
                  height: "30px",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "20px"
                }}
              >
                {" "}
                Join Us{" "}
              </button>
            </div>
            <div className="cards">
              <h4 style={{ color: "blue", fontSize: "20px" }}>
                Data Scientist
              </h4>
              <div style={{ padding: "20px", paddingLeft: 0 }}>
                We are hiring data scientists skilled with python and Java
                Script. Please share your resume on
              </div>
              <button
                style={{
                  width: "40%",
                  height: "30px",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "20px"
                }}
              >
                {" "}
                Join Us{" "}
              </button>
            </div>
            <div className="cards">
              <h4 style={{ color: "blue", fontSize: "20px" }}>DevOps</h4>
              <div style={{ padding: "20px", paddingLeft: 0 }}>
                DevOps Developers who have worked on Docker, Jenkins, AWS,
                socket server etc. Please share your resume on
              </div>
              <button
                style={{
                  width: "40%",
                  height: "30px",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "20px"
                }}
              >
                {" "}
                Join Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
