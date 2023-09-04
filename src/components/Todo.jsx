import React, { useState } from "react";
import Task from "./Task";
import Createtask from "./Createtask";
import Todos from "../data/todos";

function Todo(props){
  const [tasks,settasks]=useState(Todos);

  function addtask(task){
    console.log(Todos);
 
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
        
        <div className="Todo">
          <h1>Todo</h1>
        {tasks.map((todositem,index)=>{
          return <Task
          ondelete={deletetask}
          key={index}
          id={index}
          title={todositem.title}
          description={todositem.description}
        />
        })}
        

          <Createtask
            onadd={addtask}
          />
        </div>
          
        );
        

    
}
export default Todo;