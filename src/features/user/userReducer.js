import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        firstName: action.payload.firstName,
        lastName: action.payload.firstName,
        emailId: action.payload.emailId,
        password: action.payload.password,
        status: false,
      };
      state.users.push(newUser);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    toggleUser: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      user.status = !user.status;
    },
    setRecordAllUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, removeUser, toggleUser, setRecordAllUser } =
userReducer.actions;
export default userReducer.reducer;
