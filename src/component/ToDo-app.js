import { useEffect, useState } from "react";
import TodoListContainer from "./TodoListContainer";
import "./todo-app.css"
import TodoForm from "./TodoForm";
const TodoApp = () => {

    // const[todoValue,SetToDoValue] = useState("")
    const [todolist, setTodoList] = useState([])

    // console.log(todoValue)


    // const todolist = [];

    const onDelete = (id) => {
        setTodoList(todolist.filter(x => x.id != id))
        saveData(todolist.filter(x => x.id != id))
    }

    const clearAll = () => {
        setTodoList([])
        saveData([])
    }

    useEffect(() => {
        if (localStorage.getItem("data")) {
            setTodoList(JSON.parse(localStorage.getItem("data")))
        }
    }, [])

    const saveData = data => {
        localStorage.setItem("data", JSON.stringify(data))

    }



    return (
        <div className="todo-app-wrapper">
            <h1 className="todo-app-title">ToDO APP</h1>
            <TodoForm setTodoList={setTodoList} saveData={saveData}/>

            <TodoListContainer task={todolist} onDelete={onDelete} />
            <div className="clear-all-item">
                <p>you have 4 pending task</p>
                <button onClick={clearAll}>Clear All</button>

            </div>
        </div>

    )
}
export default TodoApp;