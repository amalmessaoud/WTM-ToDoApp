export default function TodoInput (props){
    const {handleAddTodo, todoValue, setTodoValue} = props;
    return(
        <header>
            <input value={todoValue} type="text" placeholder="Enter todo..." onChange={(e) =>{
                setTodoValue(e.target.value);
            }}/>
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue("");
            }}>Add</button>
        </header>
    )
}