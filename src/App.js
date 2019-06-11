import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import images from "./components/images/images";
import Score from "./components/score";
import Jumbotron from "./components/jumbotron"

function App() {
    return (
        < div classname="container" >
            < div className="row" >
                <div className="col-12-md">
                    < Header />
                    < Score />
                </div>
            </div >
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Clicky!</h1>
                </div>
            </div>
        </div >
    )
}
export default App
