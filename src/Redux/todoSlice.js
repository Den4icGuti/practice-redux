import { createSlice } from "@reduxjs/toolkit";

// const id = nanoid(Math.random());

const a = new Date().toISOString();
console.log(a)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter:''

  },
  reducers: {
    addTodo(state, action) {
      console.log(state)
      console.log(action)
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
     }
  },
});

export const { addTodo,removeTodo } = todoSlice.actions;
export default todoSlice.reducer;