import React from 'react'


const NotEmpty = ({value, setArray}:{value:string[], setArray:any}) => {
    const deleteValue = (index:number) => {
        setArray(value.filter((_, i) => i !== index))
        
    }
  return (
    <ul className='tasks-container'>
        {value.map((task, index) => {
            return (
                
                <li  key={index} className='tasks_item' >
                    <input onClick={() => deleteValue(index)}   type="checkbox" /> {task}
                </li>
            )
            
        })}
    </ul>
  )
}

export default NotEmpty