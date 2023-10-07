import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <p className="subscribe-text">Subscribe to our<br />newsletter</p> 
                <form>
                    <input className="email"/>
                    <button className="sub-button">Send</button>
                </form>
            </div>
            <div className="social-icons">
                <a href="vk.com"><img src={require('./icons/vk.png')} /></a>
                <a href="instagram.com"><img src={require('./icons/inst.png')} /></a>
                <a href="youtube.com"><img src={require('./icons/youtube.png')} /></a>
            </div>
            <p className="copyrights">© 2023 AntnKrn, Inc. All Rights Reserved</p>
        </footer>
    )
}

export default Footer;