import React from "react";
import { useState } from "react";
import { NotificationManager } from 'react-notifications';
import Task from "./task";

const Form = () => {
  const [text, setTaskText] = useState('')
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    if (text.length > 50) {
      NotificationManager.warning('прости, больше 50 символов низя', 'warning', 2000);
    } else
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
  }

  return (<><form className="form" onSubmit={handleSubmit}>
    <input className='text' type='text' placeholder="Start texting..." value={text} onChange={handleInputChange} />
    <input className='send' type='submit' value="DO!" />
  </form>
    <input type='button' className="drop-all" value='Пожалуй, начну сначала...' onClick={() => setTasks([])} />
    <div className="list">
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
      ))}</div>
  </>
  )
}

export default Form