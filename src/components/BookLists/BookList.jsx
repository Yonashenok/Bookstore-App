import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import classes from './BookList.module.css';
import Book from '../Book/Book';
import { fetchBooks } from '../../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <ul className={classes.bookListContainer}>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};
export default BookList;
