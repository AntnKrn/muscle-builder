import React from "react";
import './Muscles.css';

const Muscles = () => {
    const frontBodyParts = [
        "abs", "abs", "abs",
        "abs", "abs", "abs",
        "abs", "abs", "abs",
        "abs", "abs", "abs"
    ]

    const backBodyParts = [
        "abs", "abs", "abs",
        "abs", "abs", "abs",
        "abs", "abs", "abs",
        "abs", "abs", "abs"  
    ]

    const renderLinksBodyParts = (parts, className) => {
        return parts.map((part, index) => {
            return <li className={className} key={index}>{part}</li>
        })
    }
    return (
        <main>
            <div className="front-body-wrapper">
                <ul className="ul-body">
                    {renderLinksBodyParts(frontBodyParts, "front-body-item")}
                </ul>
            </div>

            <div className="back-body-wrapper">
                <ul className="ul-body">
                    {renderLinksBodyParts(backBodyParts, "back-body-item")}
                </ul>
            </div>
        </main>
    );
};

export default Muscles;