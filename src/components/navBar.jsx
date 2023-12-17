import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header>
                <Link to="/">Main</Link>
                <Link to="/login">Login</Link>
                <Link to="/films">Films</Link>
            </header>

            <Outlet />

            {/* <footer>2023</footer> */}
        </>
    );
};

export default NavBar;
