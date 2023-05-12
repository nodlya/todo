import React from "react";
import { useState } from "react";
import { NotificationManager } from 'react-notifications';
import Task from "./task";

const Form = () => {
  const [text, setTaskText] = useState('')
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      NotificationManager.warning('зачем тебе пустая задача??', 'warning', 2000);
    }
    else setTasks([...tasks, { text: text }]);
    setTaskText('')
  }

  const handleDeleteOne = (id) => {
    setTasks(
      tasks.filter((_, index) => index !== id)
    );

    console.log(id)
    console.log(tasks)
  }

  return (<><form onSubmit={handleSubmit}>
    <input className='text' type='text' value={text} onChange={handleInputChange} />
    <input className='send' type='submit' />
  </form>
    <input type='button' value='удалить все' onClick={() => setTasks([])} />
    {tasks.map((task, index) => (
      <>
        <Task
          key={index}
          index={index}
          info={task.text}
          startText={task.text}
          setTasks={setTasks}
          delete={handleDeleteOne}
        />
      </>
    ))}
  </>
  )
}

export default Form