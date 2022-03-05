import React from 'react'
import './Resume.css';

class Resume extends React.Component{
    render() {
        return (
            <div className="resume-container">
                <div className="resume">
                    <div className="resume-top">
                        <h1 className="resume-head">My Resume</h1>

                        <h2>Summary</h2>
                        <p className="resume-summary">
                            Computer Science graduate hungry for the opportunity to be an invaluable member of your development 
                            team.  Agile developer focused on solving problems. Prefers working in team-oriented environments and 
                            learning from mistakes. Hoping to utilize skills to excel as a software developer.
                        </p>

                        <h2>Skills</h2>
                        <ul className="resume-skills-li">
                            <li>Working knowledge of C, C++, C#, Java, Ruby, and Python language</li>
                            <li>Basic knowledge of HTML, JavaScript, CSS, and React.js</li>
                            <li>Working knowledge of Microsoft Windows OS</li>
                            <li>Basic knowledge of SQL</li>
                            <li>Experience working in Microsoft Office, Visual Studio, Visual Studio Code, VB.Net, Android Studio,
                                Eclipse, PyCharm, and Netbeans</li>
                        </ul>

                        <h2>Education</h2>
                        <h3 className="university">Middle Tennessee State University - Murfreesboro, Tennessee</h3>
                        <h3 className="degree">Bachelor's of Science Computer Science (May 2020)</h3>
                        <h3>GPA: 3.41</h3>
                    </div>

                    <div className="resume-bottom">
                        <h2>Projects</h2>
                        <ul className="projects-list">
                            <li className="projects-item">
                                <h2 className="projects-item-name">Searchin’ Stop</h2>
                                <p className="projects-item-desc">
                                    The Searchin’ Stop is an image segmentation program meant to be used on an AI in 
                                    which it is to detect any stop signs within a given image. Tools used to create app: Python, 
                                    GitHub, PyCharm
                                </p>
                                <li className="projects-item-tech">
                                    Filters out most shades of red in an image and registers any eight-sided objects within the 
                                    filtered image as a stop sign.
                                </li>
                                <p className="projects-item-github">
                                    GitHub:
                                    <a href="https://github.com/jtshaver/robotics_project/tree/skb4q-patch-1" target="_blank">
                                        https://github.com/jtshaver/robotics_project/tree/skb4q-patch-1
                                    </a>
                                </p>
                            </li>

                            <li className="projects-item">
                                <h2 className="projects-item-name">BMI Calculator</h2>
                                <p className="projects-item-desc">
                                    The BMI Calculator is an Android application used to calculate a person’s Body Mass 
                                    Index (BMI). Tools used to create app: Java, Android Studio
                                </p>
                                <li className="projects-item-tech">
                                    The BMI is calculated using a person’s weight in pounds and height in feet and inches to 
                                    return both the numerical result that is their BMI and if they are Underweight, Normal, 
                                    Overweight, or Obese.
                                </li>
                                <p className="projects-item-github">
                                    GitHub: 
                                    <a href="https://github.com/skb4q/BMI-Calculator" target="_blank">
                                        https://github.com/skb4q/BMI-Calculator
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume
