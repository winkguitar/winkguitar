//TODO:  Think more into the form and what needs to be in it.
function HPForm() {
    return (
        <div id={"container"}>
            <form id={"signup"}>
                <label id={"Name"}>Name: </label><br/>
                <input name={"name"} type={"text"}/><br/>
                <label id={"Name"}>Email: </label><br/>
                <input name={"email"} type={"email"}/><br/>
                <label id={"Name"}>Age*: </label><br/>
                <input name={"age"} id={"age"} type={"number"}/><br/>
                <label id={"Name"}>Years Played: </label><br/>
                <input name={"years-played"} id={"years"} type={"number"}/><br/>
                <br/>
                <label id={"Name"}>Instruments You Play: </label><br/>
                <fieldset id={"instruments"}>
                    <legend>Choose your instruments:</legend>
                    <input id={"acoustic-guitar"} type={"checkbox"}/><label>Acoustic Guitar</label><br/>
                    <input id={"electric-guitar"} type={"checkbox"}/><label>Electric Guitar</label><br/>
                    <input id={"bass-guitar"} type={"checkbox"}/><label>Bass Guitar</label><br/>
                </fieldset>
                <label id={"Name"}>Style: </label><br/>
                <input name={"name"} type={"text"}/><br/>
                <label id={"Name"}>If you had to pick one ultimate goal, what would it be?: </label><br/>
                <input name={"name"} type={"text"}/><br/>
                <input name={"submit"} type={"submit"} value={"Sign Up"} /><br />
                <p>* Age is only used for educational placement and learning purposes. I do not have the energy to do anything else with your information.
                With that said, I take every precaution in my power to ensure that our sessions our secure.</p>
                {/*  INSERT CAPTCHA  */}
            </form>
        </div>
    );
}


export default HPForm;