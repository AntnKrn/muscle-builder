import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <p>© 2023 AntnKrn, Inc. All Rights Reserved</p>
                <img src={require('./icons/vk.png')} />
                <img src={require('./icons/inst.png')} />
            </div>
        </footer>
    )
}

export default Footer;