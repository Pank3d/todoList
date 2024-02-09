import React from 'react'
interface IState {
    state:any;
    setState:any;
}

const Empty = () => {
  return (
    <div className="task_container">
      <p className="emptyTask">There are no tasks yet</p>
    </div>
  );
}

export default Empty