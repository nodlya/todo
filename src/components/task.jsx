import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../styles/task.scss"

const Task = (props) => {
    const textRef = useRef();
    const inputRef = useRef(null);

    const [toEdit, setToEdit] = useState(false);
    const [text, setText] = useState(props.info);
    const [startText, setStartText] = useState(props.startText);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    };

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

    useEffect(() => {
        if (textRef.current) {
            if (isChecked) {
                textRef.current.style.textDecoration = "line-through";
            }
            else {
                textRef.current.style.textDecoration = "none";
            }
        }
    }, [isChecked]);

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

    const handleDelete = () => {
        props.delete(props.index)
    }

    if (toEdit) {

        return (
            <div className="task" key={props.index}>
                <input className="done" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
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
        <input type="checkbox" onClick={handleCheckboxChange}/>
        <span ref={textRef}>{props.info}</span>
        <button className="icon">
            <img src={"/images/edit.png"} alt='edit' onClick={handleEditClick} />
        </button>
        <button className="icon" onClick={handleDelete}>
            <img src={"/images/delete.png"} alt='delete' />
        </button>
    </div>)
}

export default Task