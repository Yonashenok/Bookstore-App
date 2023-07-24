import React from 'react';
import classes from './CategoriesPage.module.css';
import BookList from '../components/BookLists/BookList';

const CategoriesPage = () => (
  <div className={classes.CategoriesPageContainer}>
    <BookList />
  </div>
);

export default CategoriesPage;
