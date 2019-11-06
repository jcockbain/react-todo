import React from 'react';
import ReactLogo from '../../assets/images/logo.svg';
import classes from './header.module.css';

const Header = () => (
  <header className={classes.header}>
    <img className={classes.logo} src={ReactLogo} alt="logo" />
    <h1>React Starter App</h1>
  </header>
);

export default Header;
