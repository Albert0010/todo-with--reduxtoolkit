import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {checkBoxToggle, deleteTodo, editButtonToggle, saveEditing, cancel} from "../features/todos/todosSlice.js";

function Todo({isEdit, id, isDone, title}) {
    const [editInput, setEditInput] = useState(title);
    const dispatch = useDispatch();

    return (
        (!isEdit ? <div key={id}>
            <h1>{title}</h1>
            <input type={"checkbox"}
                   checked={isDone}
                   onChange={() => dispatch(checkBoxToggle({id: id}))}/>
            <button onClick={() => dispatch(deleteTodo({id: id}))}>delete</button>
            <button onClick={() => dispatch(editButtonToggle({id: id}))}>edit</button>
        </div> : <div key={id}>
            <input type={"text"}
                   value={editInput}
                   onChange={(e) => setEditInput(e.target.value)}/>
            <button onClick={() => dispatch(saveEditing({id: id, newTitle: editInput}))}>save</button>
            <button onClick={() => {
                dispatch(cancel({id}));
                setEditInput(title);
            }}>cancel
            </button>
        </div>)
    );
}

export default Todo;
