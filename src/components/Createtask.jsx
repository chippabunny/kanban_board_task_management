import React,{useState} from "react";
//import Todos from "../data/todos";
function Createtask(props){
    

    const [task,settask]=useState({
        title:"",
        description:""
    });


    function handlechange(event){
        const {name,value}=event.target;
        settask(pretask=>{
            return {
                ...pretask,
                [name]:value
            }
        })
    }
    function addtask(event){

        props.onadd(task);
        settask({
            title:"",
            description:""
        })
        event.preventDefault();
    }
    return (

        <div>
            <form>
                <input type="text"
                 value={task.title} 
                 onChange={handlechange}

                 name="title"></input>
                <textarea
                 name="description" 
                 onChange={handlechange}
                 value={task.description}
                  rows="3"></textarea>
                <button onClick={addtask}>Add</button>
            </form>
        </div>

    )
}
export default Createtask;