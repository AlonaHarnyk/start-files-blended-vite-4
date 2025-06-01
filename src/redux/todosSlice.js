import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
    editTodo(state, action) {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, setCurrentTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
