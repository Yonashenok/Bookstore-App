import React from 'react';
import classes from './Book.module.css';

const Book = () => (
  <li className={classes.listContainer}>
    <div>
      <div>
        <p>Action</p>
        <h2>The Hunger Game</h2>
        <p>Suzanne Collins</p>
      </div>
      <div className={classes.actionBtn}>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
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

export default Book;
