import {createSlice} from "@reduxjs/toolkit";
import {
    addTodo,
    checkBoxClick,
    deleteOneTodo,
    deleteAll,
    editButton,
    save,
    cancelEditing,
    selectAllTodos
} from "./reducers.js";

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: addTodo,
        checkBoxToggle: checkBoxClick,
        deleteTodo: deleteOneTodo,
        deleteAllSelected: deleteAll,
        editButtonToggle: editButton,
        saveEditing: save,
        cancel: cancelEditing,
        selectAll: selectAllTodos
    }
})


export const {
    add,
    checkBoxToggle,
    deleteTodo,
    deleteAllSelected,
    editButtonToggle,
    saveEditing,
    cancel,
    selectAll
} = todosSlice.actions;
console.log(todosSlice);


export default todosSlice.reducer;
