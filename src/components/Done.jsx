import React,{useState}from "react";

import Task from "./Task";
import Dones from "../data/dones";
import Createtask from "./Createtask";
function Done(props){

  const [tasks,settasks]=useState(Dones);

  function addtask(task){
 
    settasks(pretasks=>{
     return [...pretasks,task];
    })

  }

  function deletetask(id){
settasks(pretasks=>{
  return pretasks.filter((taskitem,index)=>{
    return index!==id;
  })
})
  }



    return (
    <div className="Done"> 
        <h1>Done</h1>
        {tasks.map((donesitem,index)=>{
          return <Task
          ondelete={deletetask}
          key={index}
          id={index}
          title={donesitem.title}
          description={donesitem.description}
        />
        })} 

           <Createtask
            onadd={addtask}
           />
        </div>
      
    );
}
export default Done;