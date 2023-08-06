import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, sendBook } from '../../redux/books/booksSlice';
import classes from './BookInput.module.css';

const BookInput = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!bookTitle || !authorName) return;
    const newBook = {
      item_id: crypto.randomUUID(),
      title: bookTitle,
      author: authorName,
      category: genre,
    };
    dispatch(addBook(newBook));
    dispatch(sendBook(newBook));

    setAuthorName('');
    setBookTitle('');
    setGenre('');
  };

  return (
    <form className={classes.form} onSubmit={handleAddBook}>
      <h2 className={classes.title}>ADD NEW BOOK</h2>
      <div className={classes.inputs}>
        <input
          className={classes.bookInput}
          type="text"
          name=""
          id="bookInput"
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          className={classes.authorInput}
          type="text"
          name=""
          placeholder="Author"
          id="authorInput"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <select
          className={classes.genreInput}
          name="genre"
          id="country"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          <option value="Genres">Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Novel">Novel</option>
          <option value="Mystery">Mystery</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Romance novel">Romance novel</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Historical fiction">Historical fiction</option>
        </select>
        <button className={classes.addBook} type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};
export default BookInput;
