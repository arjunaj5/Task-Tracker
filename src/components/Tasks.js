import Task from "./Task"

export const Tasks = ({tasks,deleteTask,setReminder}) => {

    return (
        <>
            {tasks.map((taskObject)=><Task key={taskObject.id} task={taskObject} deleteTask={deleteTask} setReminder={setReminder}/>
            )}
        </>
    )
}

