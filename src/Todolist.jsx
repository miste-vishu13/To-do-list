import { useState } from "react";

function Todolist() {
const [task,setTask]=useState([]);
const [newTask,setNewTask]=useState("");

function handleInput(e){
 setNewTask(e.target.value)
}

function handleAdd()
{
   if(newTask.trim() !=="")
   {
  setTask(t=>[...t,newTask]);
  setNewTask("");
   }
}

function handleDelete(index)
{
 const updatedTask = task.filter((_,i) => i !== index);
 setTask(updatedTask);
}

function handleUp(index)
{
 if(index > 0)
 {
   const updatedTask = [...task];
   [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
   setTask(updatedTask);
 }
}
function handleDown(index)
{
   if(index <task.length-1)
   {
       const updatedTask = [...task];
   [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
   setTask(updatedTask);
   }
}
return (
  <div className="todo">
   <h2>TO DO LIST</h2>
    <div className="input">
        <input type="text" placeholder="Enter the task..." value={newTask} onChange={handleInput} />
            <button className="button" onClick={handleAdd}>Add Task</button>
    </div>
     <ol>
      {task.map((task,index)=>
       <li key={index}>
       <span>{task}</span>
        <button className="Button" onClick={()=>handleDelete(index)}>Delete Task</button>
        <button className="up"  onClick={ ()=>handleUp(index)}> ⬆️</button>
        <button className="down" onClick={()=>handleDown(index)}>⬇️</button>
       </li>
      )}
     </ol>
  </div>
);
}
export  default Todolist 