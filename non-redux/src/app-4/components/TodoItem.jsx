import React from 'react'

const TodoItem = ({text, toggleTodo, deleteTodo, id}) => {
    return (
        <div>
            <p>{text}</p>
            <button onClick={() => toggleTodo(id)}>Complete</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    )
}

export default TodoItem;
