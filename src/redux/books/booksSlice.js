import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook(state, action) {
      const { id } = action.payload.id;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
