import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';
import classes from './Book.module.css';

const Book = ({
  category, title, author, itemId,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className={classes.listContainer}>
      <div>
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className={classes.actionBtn}>
          <button type="button">Comments</button>
          <button onClick={() => handleRemoveBook(itemId)} type="button">
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

Book.defaultProps = {
  category: 'Nonfiction',
  title: '',
  author: '',
  itemId: 'item1',
};

Book.propTypes = {
  category: propTypes.string,
  title: propTypes.string,
  author: propTypes.string,
  itemId: propTypes.string,
};
export default Book;
