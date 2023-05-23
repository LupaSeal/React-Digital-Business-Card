import React from "react"
import "./style.css"
import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App