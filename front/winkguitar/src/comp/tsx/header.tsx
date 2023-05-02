import React from "react";
import Jumbotron from "./jumbotron";
import Player from "../../warehouse/player";


function Header(){
    return (
        <header className="header">
            <div>
                <nav id={"navbar"}>
                    <ul id={"nav-links"}>
                        <li id="nav-item">Home</li>
                        <li id="nav-item">About</li>
                        <li id="nav-item">Coaching</li>
                        <li id="nav-item">Custom Shop</li>
                        <li id="nav-item">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;