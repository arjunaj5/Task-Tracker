import { useState } from "react"

import Header from './components/Header'
import { Tasks } from './components/Tasks'
import {AddTask} from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const[tasks , setTasks]=useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder:false
    },
    {
        id:2,
        text: 'Doctors Appointment2',
        day: 'Feb 5th at 2:30pm',
        reminder:false
    },
    {
        id:3,
        text: 'Food Shoping',
        day: 'Feb 5th at 2:30pm',
        reminder:false
    }
])
//add Task
function addTask(task){
const id=Math.floor(Math.random() * 1000)+1
const newTask={
  id,...task
}
setTasks([...tasks,newTask])
}
//delete task
function deleteTask(id){
  setTasks(
    tasks.filter((taskObject)=>{
      return taskObject.id!==id
    })
  )
}
//set reminder
function setReminder(id){
  setTasks(tasks.map((taskObject)=>  taskObject.id === id ? {...taskObject,reminder:!taskObject.reminder}:taskObject ))
}

  return (
    <div className="container">
    <Header title="Tasks Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask?<AddTask addTask={addTask}/>:undefined }
    {tasks.length!==0?<Tasks tasks={tasks} deleteTask={deleteTask} setReminder={setReminder}/>:<h4>No tasks to show</h4>}
    </div>
  );
}

export default App;
