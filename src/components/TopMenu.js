import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpost-overview" activeClassName="active-link">Blogposts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default TopMenu;