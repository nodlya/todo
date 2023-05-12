import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../styles/task.scss"

const Task = (props) => {
    const [toEdit, setToEdit] = useState(false);
    const [text, setText] = useState(props.info);
    const [startText, setStartText] = useState(props.startText);

    const inputRef = useRef(null);

    const handleEditClick = () => {
        setToEdit(true);
    }

    const handleEditSave = () => {
        setToEdit(false);
        props.setTasks(prevTasks =>
            prevTasks.map((task, index) => index === props.index ? { ...task, text: text } : task)
        );
        setStartText(text)
    }

    useEffect(() => {
        if (toEdit) {
            inputRef.current.focus();
        }
    }, [toEdit]);

    const handleInputChange = (event) => {
        setText(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleEditSave();
        }
    }

    const handleEditCancel = () => {
        setText(startText)
        setToEdit(false);
    }

    // if (toRemove) {
    //     return (<></>);
    // }

    const handleDelete = () => {
        //toRemove(true)
        props.delete(props.index)
    }

    if (toEdit) {

        return (
            <div className="task" key={props.index}>
                <input type="checkbox" />
                <input
                    className="task-text"
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <button className="icon" onClick={handleEditCancel}>
                    <img src={"/images/cancel.png"} alt='cancel' />
                </button>
                <button className="icon" onClick={handleEditSave}>
                    <img src={"/images/save.png"} alt='save' />
                </button>
            </div>
        );
    }

    return (<div className="task" key={props.index}>
        <input type="checkbox" />
        <p>{props.info}</p>
        <button className="icon">
            <img src={"/images/edit.png"} alt='edit' onClick={handleEditClick} />
        </button>
        <button className="icon" onClick={handleDelete}>
            <img src={"/images/delete.png"} alt='delete' />
        </button>
    </div>)
}

export default Task