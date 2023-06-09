import { useState } from "react";

function EditTodoForm({editTodo,task}){

    const [value, setValue] = useState(task.task);

    function handleSubmit(e){
        e.preventDefault();

        editTodo(value,task.id);

        setValue("");
    }


    return (

        <form onSubmit={handleSubmit} className="TodoForm">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
        <button type="submit" className='todo-btn'>Update Task</button>
      </form>

    );
}

export default EditTodoForm;