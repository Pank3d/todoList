import { useState } from "react"




const TaskManager = () => {
    const [Empty, setEmpty] = useState<boolean>(true)
    const [Input, setInput] = useState<string>(" ")
    
    

      const handleChange = (event:any) => {
    setInput(event.target.value);
}


 if (Empty) {
    return(
    <div className="task_container">
        <p className="emptyTask">There are no tasks yet</p>
        <button  onClick={() => setEmpty(false)} className="add_task">Add Task</button>   
    </div>
    )    
    
 } else {
    return(
        <div className="newTaskinput">
            <p className="task_parag">New Task</p>
            <input onChange={handleChange} value={Input} type="text" className="inputTask" />
            <button  type="button" className="btnSubmit" id="sub">submit</button>
        </div>
    )
    
    
 }
}
export default TaskManager

