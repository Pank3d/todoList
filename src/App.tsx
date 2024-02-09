import { useEffect, useState } from 'react'
import './App.css'
import TaskManager from './components/TaskManager'
import Time from './components/Time'
import Empty from './components/Empty'
import NotEmpty from './components/NotEmpty'

function App() {
  const [empty, setEmpty] = useState<boolean>(true)
  const [Array, setArray] = useState<string[]>([])
  const [Input, setInput] = useState<string>("");
  // useEffect(() => {
    
  // }, [Array])
  
  const addTask = () => {
      setArray([...Array, Input])
  }
  const handleChange = (event: any) => {
    setInput(event.target.value);
  };
  
  return (
    <div className="wrapper">
      <div className="Time">
        <Time />
        <p className="nadpis">Tasks for today</p>
         <input onChange={handleChange} value={Input} type="text" className="" /> 
        <button onClick={addTask}  className="add_task">Add Task</button>
      </div>

      <div className="taskSection">{Array.length === 0 ? <Empty/> : <NotEmpty setArray={setArray} value={Array} />}</div>
    </div>
  );
}

export default App
