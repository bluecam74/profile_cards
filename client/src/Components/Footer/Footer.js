import React, { Component } from "react";
import "./Footer.css";
import gitHubPic from "../../img/whiteGithub.jpg";
import linkedInPic from "../../img/linkedin-logo-white.svg";

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="col-12 my-4 text-center text-white">
                    <div className="row">
                        <div className="col-md">
                            <a title="githubLink" href="https://github.com/bluecam74" target="_blank">
                            <img src={gitHubPic} alt='Github Logo' />
                            </a>
                            <a title="LinkedInLink" href="https://www.linkedin.com/in/malak-abdul/" target="_blank">
                            <img src={linkedInPic} alt='linkedIn Logo' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;