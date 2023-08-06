import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './NavPage.module.css';
import PersonIcon from '../../assets/PersonIcon';

const NavPage = () => (
  <header className={classes.headerContainer}>
    <nav className={classes.navList}>
      <h2 className={classes.Logo}>Bookstore CMS</h2>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <button type="button" className={classes.headBtn}>
      <PersonIcon />
    </button>
  </header>
);

export default NavPage;
