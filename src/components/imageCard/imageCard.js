import React from "react";
import "./imgCard.css";

const Imagecard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} className="card" src={require("../images/rawImg/" + props.image)} />
        </div>
    </div>
);

export default Imagecard;