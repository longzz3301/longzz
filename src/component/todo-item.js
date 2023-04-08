const TodoItem = (props) => {
    const { title, Id, onDelete } = props
    return (
        <div>
            <div className="todo-item" >
                <span>{title}</span>
                <button onClick={()=>{onDelete(Id)}}>X</button>
            </div>
        </div>
    )
}
export default TodoItem