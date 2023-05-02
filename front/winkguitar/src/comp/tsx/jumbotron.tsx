function Jumbotron(props: any){
    return (
        <div id={"jumbotron"}>
            <div id={"test"}>
            <h2 className={"jumbo-header"}>{props.heading}</h2>
            <p>{props.text}</p>
            <button id={"jumbo-button"}>{props.button}</button>
            </div>
        </div>
    );
}


export default Jumbotron;