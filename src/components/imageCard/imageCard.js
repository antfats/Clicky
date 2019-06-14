import React from "react";


const Imagecard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img src={require("../images/rawImg/" + props.image)} />
        </div>
    </div>
);

export default Imagecard;