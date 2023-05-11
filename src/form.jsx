import React from "react";
import { useState } from "react";
import Task from "./task";

const Form = () => {
  const [text, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])


  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') alert('зачем тебе пустая задача?')
    else setTasks([...tasks, { text: text }]);
    setTaskText('')
  }

  return (<><form onSubmit={handleSubmit}>
    <input className='text' type='text' value={text} onChange={handleInputChange} />
    <input className='send' type='submit' />
  </form>
    <input type='button' value='удалить все' onClick={() => setTasks([])} />
        {tasks.map((task, index) => (
            <Task
                key={index}
                index={index}
                info={task.text}
                startText={task.text}
                setTasks={setTasks}
            />
        ))}
  </>
  )
}

export default Form