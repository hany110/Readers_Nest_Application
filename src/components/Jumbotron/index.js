import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ textAlign: "center" }}
            className="col-lg jumbotron jumbo-color"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
