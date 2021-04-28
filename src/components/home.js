import React from 'react'
import {Link, Route} from "react-router-dom";
import SearchBar from './search-bar';
import Nav from './Nav';

export default () =>
    <>
            <Nav />
        <div className="list-group">
                <SearchBar/>
        </div>
    </>
