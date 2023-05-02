import "../../css/tab.css";


function TabContainer(){
    return (
        <div className={"at-wrap"}>
            <div className={"at content"}>
                <div className="at-sdebar">
                Track selector will go here
                </div>
                <div className={"at-viewport"}>
                    {/* Viewport will scroll */}
                    <div className={"at-main"}></div>
                </div>
            </div>
            <div className={"at-controls"}>
                Controls will go here
            </div>
        </div>
        );
}

export default TabContainer;