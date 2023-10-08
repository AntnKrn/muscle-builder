import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Calculator.css";

const Calculator = () => {

    const onCheckhandler = (e) => {
        console.log(e);
    }

    /* const calculateCalories = () => {
        return ((10 * weight) + (6,25 * height) - (5 * age)) * index
    } */

    return (
        <React.Fragment>
            <Header />
            <div className="calories-wrapper">
                <form className="calories-form">
                    <label>Age</label>
                    <input type="number"></input>
                    <br />
                    <label>Gender</label>
                    <select name="gender" required="required">
                        <option value="">Select gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    <br />
                    <label>Weight</label>
                    <input type="number"></input>
                    <br />
                    <label>Height</label>
                    <input type="number"></input>
                    <br />
                    <label>Level of physical activity</label>
                    <select name="activity" required="required">
                        <option value="">Select activity</option>
                        <option value="1">No physical activity and sedentary work</option>
                        <option value="2">Short runs or doing light exercises</option>
                        <option value="3">Moderate-intensity sports 3–5 times a week</option>
                        <option value="4">Full training 6-7 times a week</option>
                        <option value="5">Daily physical activity and physical work</option>
                    </select>
                    <br />
                    <button onClick={onCheckhandler}>Check</button>
                </form>
                <div className="calories">
                    <p>To gain muscle: </p>
                    <p>For weight stability: </p>
                    <p>For weight loss: </p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Calculator;