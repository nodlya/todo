import React from "react";
import { useState } from "react";

const Edit = (props) => {

    const [editedText, changeText] = useState(props.text)

    const handleSave = (event) => {
        event.preventDefault();
        console.log(editedText);
        props.onSave(editedText, props.index);
    }

    const handleChange = (event) => {
        changeText(event.target.value);
        console.log(editedText);
    }


    return (
        <>
            <form>
                <input type="text" value={editedText} onChange={handleChange} />
                <input type="button" text="отмена" onClick={() => props.onCancel()} />
                <input type="button" text="сохранить" onClick={handleSave} />
            </form>
        </>
    );
}

export default Edit;