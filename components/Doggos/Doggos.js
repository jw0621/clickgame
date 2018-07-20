import React from "react";
import "./Doggos.css";

const Doggos = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectDog(props.breed)} 
                className="style_prevu_kit"
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default Doggos;