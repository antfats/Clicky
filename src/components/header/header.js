import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="itemLeft" href="/">Clicky</li>
                    <li className="itemRight">Score: {this.props.score} </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
