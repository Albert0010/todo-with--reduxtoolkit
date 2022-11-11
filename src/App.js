import {useSelector, useDispatch} from "react-redux";
import './App.css';
import Todo from "./components/todo.js";
import {change, add as addI} from "./features/input/inputSlice.js";
import {add, deleteAllSelected, selectAll} from "./features/todos/todosSlice.js";

function App() {
    const input = useSelector(s => s.input);
    let todos = useSelector(s => s.todos);

    const dispatch = useDispatch();


    return (
        <div className="App">
            <input value={input}
                   onChange={(e) => dispatch(change({input: e.target.value}))}/>

            <button disabled={!(input.trim())}
                    onClick={() => {
                        dispatch(add({title: input}));
                        dispatch(addI());
                    }}>Add
            </button>
            <button
                onClick={() => dispatch(deleteAllSelected())}>{todos.every(t => t.isDone) ? "Delete All" : "Delete selected"}</button>
            <button disabled={todos.every(t => t.isDone)} onClick={() => {
                dispatch(selectAll())
            }}> select all
            </button>
            {todos.map((t) => <Todo key={t.id}
                                    isEdit={t.isEdit}
                                    isDone={t.isDone}
                                    title={t.title}
                                    id={t.id}/>)}
        </div>
    );
}

export default App;