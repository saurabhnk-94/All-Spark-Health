import React from "react";
import "./components.css";



class About extends React.Component{
    render(){
        return (
            <div className="about-page">
                <div className="about-first">
                    <h1>OUR STORY</h1>
                    <div style={{width:"40%"}}>
                    We are a technology company which is building enterprise solutions to automate redundant daily works, especially operations. We are a team of passionate people who want to democratize the AI usage in Enterprise in all the sectors.
                    </div>
                </div>
                <div className="about-second">
                    <h1>Would like to join our team?</h1>

                    <div className="about-joining">
                        <div className="cards">
                            <h4>Doctors</h4>
                            <div>We are looking for General Medicine MD doctors to join our team. Please ping us with your resume on</div>
                            <button> Join Us </button>
                        </div>
                        <div className="cards">
                            <h4>Data Scientist</h4>
                            <div>We are hiring data scientists skilled with python and Java Script. Please share your resume on</div>
                            <button> Join Us </button>
                        </div>
                        <div className="cards">
                            <h4>DevOps</h4>
                            <div>DevOps Developers who have worked on Docker, Jenkins, AWS, socket server etc.
Please share your resume on</div>
                            <button> Join Us </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
 }

 export default About;