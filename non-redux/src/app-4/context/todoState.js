import React, {useReducer} from 'react';
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './todo-actions'

const TodoState = ({children}) => {

    const initialState = {
        todos: []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    // ADD TODO
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
    };

    // TOGGLE TODO
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID,
        })
    }

    // DELETE TODO
    const deleteTodo = (todoID) => {
      dispatch({
        type: DELETE_TODO,
        payload: todoID,
      });
    };

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            toggleTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoState
