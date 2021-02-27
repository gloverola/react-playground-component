import React from 'react'
import {useDispatch} from 'react-redux';
import {editGrocery} from './features/grocerySlice'

import './App.css'
import GroceryList from './components/groceryList/GroceryList'
import Input from './components/input/Input';

const App = () => {

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(editGrocery({id}));
  }
  return (
    <div className='container'>
      <div className='content'>
        <Input />
        <GroceryList handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;











// import React from "react";
// import "./App.css";
// import Input from "./components/input/Input";
// import TodoList from "./components/todoList/TodoList";
// import { allTodos } from "./features/todoSlice";
// import { auth, provider } from "./firebase";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   setActiveUser,
//   logoutUser,
//   selectUserEmail,
//   selectUserName,
// } from "./features/userSlice";

// const App = () => {
//   const dispatch = useDispatch();

//   const userName = useSelector(selectUserName);
//   const userEmail = useSelector(selectUserEmail);

//   const todos = useSelector(allTodos);
//   console.log(todos);

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => dispatch(logoutUser()))
//       .catch((e) => console.log(e.message));
//   };

//   const handleSignIn = () => {
//     auth.signInWithPopup(provider).then((result) =>
//       dispatch(
//         setActiveUser({
//           userName: result.user.displayName,
//           userEmail: result.user.email,
//         })
//       )
//     );
//   };

//   return (
//     <div>
//       {userName ? (
//         <div>
//           <p>welcome {userName}</p>
//           <p>your email is {userEmail}</p>
//           {todos.map((todo) => (
//             <TodoList
//               item={todo.text}
//               key={todo.id}
//               id={todo.id}
//               completed={todo.completed}
//             />
//           ))}

//           <Input />
//           <button onClick={handleSignOut}>Sign out</button>
//         </div>
//       ) : (
//         <button onClick={handleSignIn}>Sign in</button>
//       )}
//     </div>
//   );
// };

// export default App;
