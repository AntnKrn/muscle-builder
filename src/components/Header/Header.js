import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const linksNames = [
        {to: "/exercises", exact: "true", lable: "Exercises"}, 
        {to: "/calculator", exact: "true", lable: "Calorie Calculator"},
        {to: "/news", exact: "true", lable: "News"},
        {to: "/authorization", exact: "true", lable: "Login"}
    ];

    const renderLinks = (links) => {
        return links.map((link, index) => {
            return (
                <li className="navigation-item" key={index}>
                    <NavLink className="navigation-item-link" to={link.to} exact={link.exact}>{link.lable}</NavLink>
                </li>
            );
        });
    };

    return (
            <header>
                    <h1 className="name"><NavLink to="/">sportapp</NavLink></h1>
                        <nav>
                            <ul className="navigation">
                                {renderLinks(linksNames)}
                            </ul>
                        </nav>
            </header>
    )
}

export default Header;