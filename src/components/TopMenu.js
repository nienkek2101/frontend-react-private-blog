import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function TopMenu({ isAuth, toggleAuth }) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push("/")
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    {isAuth ?
                        <>
                            <li><NavLink to="/blogpost-overview" activeClassName="active-link">Blogposts</NavLink></li>
                            <button type="button" onClick={signOut}>Uitloggen</button>
                        </> : ""}
                    {!isAuth ? <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li> : ""}
                </ul>
            </nav>
        </>
    );
};

export default TopMenu;