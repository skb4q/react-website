import React from 'react'
import {BottomNavigationAction} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

function Footer() {
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
                <p className="footer-contact-heading">Contact Information:</p>
                <p>Mobile Number: (615) 663-3590</p>
                <p>E-mail: sbounyalith@gmail.com</p>
                <p className="footer-contact-flavortext">Contact me at any time</p>
            </section>
        </div>
    )
}

export default Footer
