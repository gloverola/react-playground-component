import { createSlice } from '@reduxjs/toolkit'


const grocerySlice = createSlice({
  name: "grocery",
  initialState: [],
  reducers: {
    addGrocery: (state, action) => {
      const { id, text } = action.payload;
      if (text !== '') {
        state.push({
          id,
          text,
        });
      }
    },
    deleteGrocery: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
    editGrocery: (state, action) => {
      const {id} = action.payload;
      state.find(item => item.id === id);
    }
  },
});

export const {addGrocery, deleteGrocery, editGrocery} = grocerySlice.actions;
export const allGrocerys = (state) => state.grocery;
export default grocerySlice.reducer;





// import { createSlice } from '@reduxjs/toolkit'



// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const { id, text, completed } = action.payload;
//       state.push({ id, text, completed });
//     },

//     toggleTodo: (state, action) => {
//       state.map((item) => {
//         if (action.payload === item.id) {
//           if (item.completed === true) {
//             item.completed = false;
//           } else {
//             item.completed = true;
//           }
//         }
//       });
//     },

    
//   },
// });

// export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
// export const allTodos = (state) => state.todos
// export default todoSlice.reducer;