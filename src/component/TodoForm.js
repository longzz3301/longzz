

const TodoForm = (props) => {
    const { setTodoList,saveData } = props // ? 
    // console.log(props)

    const onSubmit = (e) => {
        e.preventDefault();
        const todoText = e.target.input.value;
        setTodoList((prevState) => {
            // const newTodoItem = [...prevState];
            // newTodoList.push ({
            //     title:todoText,
            //     id: Math.random(),

            const newTodoItem = {
                title: todoText,
                id: Math.random(),

            }
            saveData([...prevState, newTodoItem])
            return [...prevState, newTodoItem]
        });


        // SetToDoValue(todoText)
    };

   

    return (
        <form className="todo-form" onSubmit={onSubmit} >
            <input className="todo-input" type="text" placeholder="Enter your task" name="input" />
            <button className="todo-add-button" >Add todo</button>

        </form>
    )
};
export default TodoForm