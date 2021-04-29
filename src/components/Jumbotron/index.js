import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{textAlign: "center", paddingLeft: "0px", paddingRight: "0px"}}
            className="col-lg jumbotron jumbo-color"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
