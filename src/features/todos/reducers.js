export const addTodo = (state, action) => {
    const {title} = action.payload;
    state[state.length] = {id: Math.random(), title: title, isDone: false, isEdit: false};
}

export const checkBoxClick = (state, action) => {
    const {id} = action.payload;
    state.forEach((t) => {
        (id === t.id) && (t.isDone = !t.isDone);
    })
}
export const deleteOneTodo = (state, action) => {
    return state.filter((t) => t.id !== action.payload.id);
}

export const deleteAll = (state) => {
    return state.filter((t) => !t.isDone)
}
export const editButton = (state, action) => {
    state.forEach((t) => {
        if (t.id === action.payload.id) {
            t.isEdit = !t.isEdit;
        }
    })
}
export const save =  (state, action) => {
    const {id, newTitle} = action.payload;
    const index = state.findIndex((t) => t.id === id);
    state[index] = {...state[index], title: newTitle, isEdit: false};
}
export const cancelEditing = (state, action) => {
    const {id} = action.payload;
    const index = state.findIndex((t) => t.id === id);
    state[index] = {...state[index], isEdit: false};
}

export const selectAllTodos = (state,action) => {
    console.log(action)
    state.forEach((t) => {
        t.isDone = true;
    });
}



