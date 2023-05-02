import '../css/font.css';
import '../css/hp-style.css';
import HPForm from "./forms/hp-form";
import Jumbotron from "./jumbotron";



function TabBody(){
    return (
        <div className="container">
        <iframe width="70%" height="550" title="Ultimate Warmup (The Hops)" src="https://musescore.com/user/63491299/scores/10707445/embed"   allow="autoplay; fullscreen"></iframe><br />
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
                heading={"Hello, World"}
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