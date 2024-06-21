import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload, state);
      const newTodo = {
        id: nanoid(),
        firstName: action.payload.firstName,
        lastName: action.payload.firstName,
        emailId: action.payload.emailId,
        password: action.payload.password,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    setRecordAll: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo,setRecordAll } = todoSlice.actions;
export default todoSlice.reducer;
