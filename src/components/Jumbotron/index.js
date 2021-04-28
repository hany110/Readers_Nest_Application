import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ textAlign: "center" }}
            className="col-lg jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
