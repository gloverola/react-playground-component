import React, {useState, useContext} from 'react'
import TodoContext from '../context/todo-context'

const TodoInput = () => {

    const [todo, setTodo] = useState('');

    const {addTodo} = useContext(TodoContext);

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.random(),
            text: todo,
            complete: false
        }

        addTodo(newTodo);

        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={todo}/>
          <button type="submit">ADD</button>
        </form>
    )
}

export default TodoInput
