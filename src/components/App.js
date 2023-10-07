import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import Authorization from "../container/Authorization/Authorization";
import Calculator from "../container/Calculator/Calculator";
import News from "../container/News/News";
import Exercises from "../container/Exercises/Exercises"; 
import Home from "../container/Home/Home";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home /> }></Route>
                        <Route path="/exercises" element={ <Exercises /> }></Route>
                        <Route path="/calculator" element={ <Calculator /> }></Route>
                        <Route path="/news" element={ <News /> }></Route>
                        <Route path="/authorization" element={ <Authorization /> }></Route>
                    </Routes>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;