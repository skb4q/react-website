import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import {BottomNavigationAction} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

function Footer() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail_service', 'gmail_template', e.target, 'Xudx7mewN3mjq9y_m')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div className="footer-container">
            <section className="footer-section">
                <p className="footer-section-heading">
                    External Links
                </p>

                <section className="external-link-list">
                    <a className="external-link" href="https://www.linkedin.com/in/sooriyakbounyalith/" target="_blank">
                    <BottomNavigationAction className="external-logo" icon={<LinkedInIcon style={{fill: "#58A3FE"}} />}/>
                    LinkedIn
                    </a>
                    <a className="external-link" href="https://github.com/skb4q" target="_blank">
                    <BottomNavigationAction className="external-logo" icon={<GitHubIcon style={{fill: "#FFFFFF"}}/>}/>
                        GitHub
                    </a>
                </section>
            </section>
            

            <section className="footer-contact">
                <p className="footer-contact-flavortext">Contact me at any time</p>

                <form onSubmit={sendEmail}>
                    <div className="form">
                        <div className="info-field">
                            <input type="text" className="text-input" placeholder="Name" name="from_name"/>
                        </div>
                        <div className="info-field">
                            <input type="email" className="text-input" placeholder="E-mail Address" name="from_email"/>
                        </div>
                        <div className="info-field">
                            <input type="text" className="text-input" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="message-field">
                            <textarea className="message-content" placeholder="Type message here" name="message" />
                        </div>
                        <div className="btn">
                            <input type="submit" className="send-btn" value="Send Message" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

// 

export default Footer
