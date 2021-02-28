import React, { useContext } from 'react'
import TodoItem from './TodoItem';
import TodoContext from '../context/todo-context'

const TodoList = () => {

    const {todos, toggleTodo, deleteTodo} = useContext(TodoContext);

    return (
      <div>
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} id={todo.id} />
        ))}
      </div>
    );
}

export default TodoList
