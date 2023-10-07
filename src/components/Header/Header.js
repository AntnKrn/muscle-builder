import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
            <header>
                    <h1 className="name"><NavLink to="/">sportapp</NavLink></h1>
                        <nav>
                            <ul className="navigation">
                                <li className="navigation-item"><NavLink className="navigation-item-link" to="/exercises" exact="true">Exercises</NavLink></li>
                                <li className="navigation-item"><NavLink className="navigation-item-link" to="/calculator" exact="true">Calorie Calculator</NavLink></li>
                                <li className="navigation-item"><NavLink className="navigation-item-link" to="/news" exact="true">News</NavLink></li>
                                <li className="navigation-item"><NavLink className="navigation-item-link" to="/authorization" exact="true">Login</NavLink></li>
                            </ul>
                        </nav>
            </header>
    )
}

export default Header;