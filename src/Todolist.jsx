import { useState } from "react";

function Todolist() {
const [task,setTask]=useState(["Wake up early","Do exercise","Prepare Food"]);
const [newTask,setNewTask]=useState();

function handleInput(e){
 setNewTask(e.target.value)
}

function handleAdd()
{
 
}
function handleDelete(index)
{
  
}


return (
  <div>
   <h2>TO DO LIST</h2>
    <div>
        <input type="text" placeholder="Enter the task..." value={newTask} onChange={handleInput} />
         <span>
            <button>Add Task</button>
           
             <span className="move-task">
                <button className="up"> ⬆️</button>
                <button className="down">⬇️</button>
             </span>
         </span>
    </div>

     <ol>
      {task.map((task,index)=>
       <li key={index}>
       <span>{task}</span>
        <button onChange={()=>handleDelete(index)}>Delete Task</button>
       </li>
      )}
     </ol>
  </div>
);
}
export  default Todolist 