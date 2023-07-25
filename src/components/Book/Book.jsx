import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';
import classes from './Book.module.css';
/* eslint-disable react/prop-types */

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className={classes.listContainer}>
      <div>
        <div>
          <p>{book.category}</p>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
        <div className={classes.actionBtn}>
          <button type="button">Comments</button>
          <button onClick={() => handleRemoveBook(book.item_id)} type="button">
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;
