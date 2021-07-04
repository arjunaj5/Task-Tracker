import { useState } from "react"
export const AddTask = ({addTask}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    function onSubmit(e){
        e.preventDefault()  //prevents default sublmission to page
        addTask({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <div>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="task"> Task </label>
                    <input type="text" required placeholder="Add Task" id="task" value={text} onChange={(e)=>setText(e.target.value)} />
                </div>

                <div className="form-control">
                    <label htmlFor="date"> Date </label>
                    <input type="text"  id="date" placeholder="Add Date & Time" value={day} onChange={e=>setDay(e.target.value)} />
                </div>

                <div className="form-control form-control-check">
                    <label htmlFor="reminder"> Set Reminder </label>
                    <input type="checkbox" checked={reminder} id="reminder" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </div>

                <input type="submit" className="btn btn-block" value="Save Task"></input>
            </form>
        </div>
    )
}

