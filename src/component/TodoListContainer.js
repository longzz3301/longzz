
import TodoItem from "./todo-item"
function TodoListContainer(props) {
    const { task, onDelete } = props
    // console.log(props)

    return (

        <div className="todo-container">
            {task.map((task) => <TodoItem title={task.title}
                Id={task.id} onDelete={onDelete} />)}
        </div>
    )
}
export default TodoListContainer