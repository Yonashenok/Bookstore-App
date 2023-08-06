import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';
import classes from './Book.module.css';

const Book = ({
  category, title, author, itemId,
}) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(12.5);
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  const handleProgress = (e) => {
    const chapter = e.target.value.split(' ');
    const prog = (+chapter[1] / 8) * 100;
    setProgress(prog);
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
        </div>
      </div>
      <div className={classes.completed}>
        <CircularProgressbar value={progress} className={classes.progress} />
        <div>
          <p className={classes.Percent_Complete}>{`${progress}%`}</p>
          <p className={classes.completedText}>Completed</p>
        </div>
      </div>
      <div>
        <h2 className={classes.current_Chapter}>UPDATE PROGRESS</h2>
        <p className={classes.current_Chapter}>Current Chapter</p>
        <form>
          <select
            className={classes.update_progress}
            name="country"
            id="country"
            onChange={handleProgress}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <option
                className={classes.chapter}
                key={`result-${i}`}
                value={`Chapter ${i + 1}`}
              >
                {`Chapter ${i + 1}`}
              </option>
            ))}
          </select>
        </form>
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
