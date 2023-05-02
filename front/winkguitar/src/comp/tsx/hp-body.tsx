import '../css/font.css';
import '../css/hp-style.css';
import Player from "../../warehouse/player";
import HPForm from "./forms/hp-form";
import Jumbotron from "./jumbotron";
import React from "react";

let Drew = new Player("Hello");

Drew.age = 32;
Drew.yearsPlayed = 21;
Drew.plays = ["Guitar", "Piano", "Drums"];

function TabBody(){
    return (
        <div className="container">
        <iframe width="70%" height="550" title="Ultimate Warmup (The Hops)" src="https://musescore.com/user/63491299/scores/10707445/embed"   allow="autoplay; fullscreen"></iframe>
        <span>
                <a href="https://musescore.com/user/63491299/scores/10707445/s/iObHg3" target="_blank" rel="noopener">Ultimate Warmup (The Hops)</a> by 
                <a href="https://musescore.com/user/63491299">WINK Guitar</a>
            </span>
        </div>
    );
}


function HPBody(){
    return (
        <main>
            <Jumbotron
                heading={Drew.plays[0]}
                text={"This is some textuals"}
                button={"Click here"}
            />
            <h2 id="header-test">
                This is Text.
            </h2>
            <HPForm />
            <TabBody />
        </main>
    );
}

export default HPBody;