import React from "react";
import { useState } from "react";
import editIcon from "./images/edit.png";
import deleteIcon from "./images/delete.png";
import "./styles/task.scss"
import Edit from "./edit";

const Task = (props) => {

    const [toRemove, remove] = useState(false);
    const [toEdit, setToEdit] = useState(false);

    const handleEditClick = () => {
        setToEdit(true);
    }

    const handleEditSave = (text, key) => {
        setToEdit(false);
        props.setTasks(prevTasks =>
            prevTasks.map((task, index) => index === key ? { ...task, text: text } : task)
        );
    }

    if (toRemove) {
        return null;
    }

    if (toEdit) {
        return (
            <Edit
                text={props.info}
                index={props.index}
                onCancel={() => setToEdit(false)}
                onSave={handleEditSave}
            />
        );
    }

    return (<div className="task">
        <input type="checkbox" />
        <p>{props.info}</p>
        <button className="edit-icon">
            <img src={editIcon} alt='edit' onClick={handleEditClick} />
        </button>
        <button className="delete-icon" onClick={() => remove(true)}>
            <img src={deleteIcon} alt='delete' />
        </button>
    </div>)
}

export default Task