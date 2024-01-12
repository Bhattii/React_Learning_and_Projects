import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello World! ' }],
};

function sayHello() {
  console.log('Hello World!');
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: () => {},
    removeTodo: () => {},
  },
});
