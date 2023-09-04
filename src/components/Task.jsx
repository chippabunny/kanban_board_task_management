import React from "react";

function Task(props){
function handleclick(){
    props.ondelete(props.id);
}


    return (

        <div className="task">
            <h1 id="title">{props.title}</h1>
            <p id="description">{props.description}</p>
            <button id="delete" onClick={handleclick}>delete</button>
        </div>

    );
}
export default Task;