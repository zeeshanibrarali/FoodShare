// import React from 'react'
import { brandLogo } from "../assets";
import "../App.css"
import MainLine from "./mainLine";

export default function header() {
    return (
        <section className="Navheader">
            <nav>
                <a href="index.html"><img src={brandLogo} alt="" /></a>
                <div className="nav-links" id="navlink">
                    {/* <i className="fa fa-regular fa-circle-xmark" onclick="hideMenu()"></i> */}
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT US</a></li>
                        {/* <li><a href="">MENU</a></li>
                        <li><a href="">ABOUT US</a></li> */}
                        <a href="" className="logInBtn">Log In</a>
                    </ul>
                </div>

                {/* <i className="fa fa-solid fa-bars" onclick="showMenu()"></i> */}
                {/* <i className="fa fa-regular fa-bars" onclick="showMenu()"></i>  */}
            </nav>
            <MainLine/>
        </section>
    )
}
