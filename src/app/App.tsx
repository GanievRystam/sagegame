import React from "react";
import './styles.scss';
import Home from "../pages/home/Home";
import Navbar from "./ui/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
        </>
    )
}
export default App;