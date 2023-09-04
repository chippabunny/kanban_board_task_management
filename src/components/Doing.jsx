import React,{useState} from "react";
import Task from "./Task";
import Createtask from "./Createtask";
import Doings from "../data/doings";


function Doing(props){


  const [tasks,settasks]=useState(Doings);

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
        
        <div className="Doing">  <h1>Doing</h1>
        {tasks.map((doingsitem,index)=>{
          return <Task
          ondelete={deletetask}
          key={index}
          id={index}
          title={doingsitem.title}
          description={doingsitem.description}
        />
        })}

        <Createtask
          onadd={addtask}
        />
        </div>
          
        );
        

    
}
export default Doing;