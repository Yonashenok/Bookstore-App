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
        <div className={classes.authorDetails}>
          <p className={classes.category}>{category}</p>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.author}>{author}</p>
        </div>
        <div className={classes.actionBtn}>
          <button className={classes.commentsBtn} type="button">
            Comments
          </button>
          <button
            className={classes.removeBtn}
            onClick={() => handleRemoveBook(itemId)}
            type="button"
          >
            Remove
          </button>
          <button className={classes.editBtn} type="button">
            Edit
          </button>
        </div>
      </div>
      <div className={classes.completed}>
        <button role="tab" type="button" className={classes.Oval}>
          .
        </button>
        <div>
          <p className={classes.Percent_Complete}>64%</p>
          <p className={classes.completedText}>Completed</p>
        </div>
      </div>
      <div>
        <p className={classes.current_Chapter}>Current Chapter</p>
        <p className={classes.current_Lesson}>Chapter 17</p>
        <button className={classes.update_progress} type="button">
          UPDATE PROGRESS
        </button>
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
