import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import image from "./simpsons.json";
// import Jumbotron from "./components/jumbotron";
import Imagecard from "./components/imageCard";

class App extends Component {
    state = {
        image,
        clickedImg: [],
        score: 0
    };

    imageClick = event => {
        const currentImg = event.target.alt;
        const ImgAlreadyClicked = this.state.clickedImg.indexOf(currentImg) > -1;

        if (ImgAlreadyClicked) {
            this.setState({
                image: this.state.image.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                clickedImg: [],
                score: 0
            });
            alert("You lose. Play again?")
        }
        else {
            this.setState(
                {
                    image: this.state.image.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    clickedImg: this.state.clickedImg.concat(currentImg),
                    score: this.state.score + 1
                },
                () => {
                    if (this.state.score === 6) {
                        alert("You Win!");
                        this.setState({
                            image: this.state.image.sort(function (a, b) {
                                return 0.5 - Math.random();
                            }),
                            clickedImg: [],
                            score: 0
                        });
                    }
                });
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Header score={this.state.score} />
                </div>
                {/* <Jumbotron /> */}
                <div className="wrapper">
                    {this.state.image.map(image => (
                        <Imagecard imageClick={this.imageClick}
                            id={image.id}
                            key={image.id}
                            image={image.image}
                        />
                    ))}
                </div>
            </div>
        );
    }


};


export default App;
