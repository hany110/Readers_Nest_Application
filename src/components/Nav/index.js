import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
            <a className="navbar-brand" href="/">Reader's Nest</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/bookshelf">Saved</a>
                    </li>
                    {/*<li className="nav-item float-right">*/}
                    {/*    <a className="nav-link" href="/login">Login</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item float-right">*/}
                    {/*    <a className="nav-link" href="/register">Register</a>*/}
                    {/*</li>*/}
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
