import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import './App.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Footer />          
            </React.Fragment>

        )
    }
}

export default App;