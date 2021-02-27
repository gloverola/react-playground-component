import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {addGrocery} from '../../features/grocerySlice'

const Input = () => {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addGrocery({
        text: item,
        id: new Date().getTime().toString(),
      })
    );
    setItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <input 
        type='text' 
        placeholder='e.g Eggs' 
        value={item}
        onChange={inputChangeHandler}
      />
      <button type="submit" className="input-btn">ADD</button>
    </form>
  );
};

export default Input;

// import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {addTodo} from '../../features/todoSlice'

// const Input = () => {

//     const [todo, setTodo] = useState('');

//     const dispatch = useDispatch();

//     const saveTodo = () => {
//         dispatch(addTodo({
//             text: todo,
//             completed: false,
//             id: Date.now()
//         }));
//         console.log('todo added');
//     }

//     return (
//       <div>
//         <input
//           type='text'
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />

//         <button onClick={saveTodo}>Add</button>
//       </div>
//     );
// }

// export default Input
