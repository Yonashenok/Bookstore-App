import React from 'react';
import classes from './CategoriesPage.module.css';
import NavPage from '../components/NavPage/NavPage';

const CategoriesPage = () => (
  <div className={classes.CategoriesPageContainer}>
    <NavPage />
    <h1>Categories</h1>
  </div>
);

export default CategoriesPage;
