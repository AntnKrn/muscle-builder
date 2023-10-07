import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="name">sportapp</h1>
                <nav>
                    <ul className="navigation">
                        <li className="navigation-item"><a className="navigation-item-link" href="www.dsadsadsadsadsfagf.com">Exercises</a></li>
                        <li className="navigation-item"><a className="navigation-item-link" href="www.dsadsadsadsadsfagf.com">Calorie Calculator</a></li>
                        <li className="navigation-item"><a className="navigation-item-link" href="www.dsadsadsadsadsfagf.com">News</a></li>
                        <li className="navigation-item"><a className="navigation-item-link" href="www.dsadsadsadsadsfagf.com">Login</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;