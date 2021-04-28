import React from "react";
import "./style.css";
//import { PromiseProvider } from "mongoose";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
    return (
        <a href={props.link} alt={props.title} {...props}>
            <button className="btn btn-primary view-btn">
                View
            </button>
        </a>
    );
}

export default ViewBtn;
