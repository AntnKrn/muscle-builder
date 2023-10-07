import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Muscles from "../../components/Muscles/Muscles";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Muscles />
            <Footer />
        </React.Fragment>
    )
}

export default Home;