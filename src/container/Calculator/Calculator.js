import React from "react";
import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Calculator.css";

const Calculator = () => {
    const ageFromForm = useRef(0);
    const genderFromForm = useRef(0);
    const weightFromForm = useRef(0);
    const heightFromForm = useRef(0);
    const activityFromForm = useRef(0);
    const [calories, setCalories] = useState(0);

    const onCheckhandler = (e) => {
        e.preventDefault();
        const age = Number(ageFromForm.current.value) * 5;
        const gender = Number(genderFromForm.current.value);
        const weight = Number(weightFromForm.current.value) * 10;
        const height = Number(heightFromForm.current.value) * 6.25;
        const activity = Number(activityFromForm.current.value);
        console.log(age, gender, weight, height, activity);
        setCalories(calculateCalories(age, gender, weight, height, activity).toFixed())
        console.log(calories)
    }

    const calculateCalories = (age, gender, weight, height, activity) => {
        console.log(age, gender, weight, height, activity)
        return (weight + height - age + gender) * activity
    }

    return (
        <React.Fragment>
            <Header />
            <div className="calories-wrapper">
                <form className="calories-form">
                    <label>Age</label>
                    <input type="number" name="age" ref={ageFromForm}></input>
                    <br />
                    <label>Gender</label>
                    <select name="gender" required="required" ref={genderFromForm}>
                        <option value="">Select gender</option>
                        <option value="5">Male</option>
                        <option value="-161">Female</option>
                    </select>
                    <br />
                    <label>Weight</label>
                    <input type="number" name="weight" ref={weightFromForm}></input>
                    <br />
                    <label>Height</label>
                    <input type="number" name="height" ref={heightFromForm}></input>
                    <br />
                    <label>Level of physical activity</label>
                    <select name="activity" required="required" ref={activityFromForm}>
                        <option value="">Select activity</option>
                        <option value="1.2">No physical activity and sedentary work</option>
                        <option value="1.375">Short runs or doing light exercises</option>
                        <option value="1.55">Moderate-intensity sports 3–5 times a week</option>
                        <option value="1.725">Full training 6-7 times a week</option>
                        <option value="1.9">Daily physical activity and physical work</option>
                    </select>
                    <br />
                    <button onClick={onCheckhandler}>Check</button>
                </form>
                <div className="calories">
                    <p>To gain muscle: {calories === 0 ? null : (calories - (-498))}</p>
                    <p>For weight stability: {calories === 0 ? null : calories}</p>
                    <p>For weight loss: {calories === 0 ? null : calories - 518}</p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Calculator;