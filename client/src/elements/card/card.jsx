import React from 'react';
import classes from './card.module.css';

const Card = ({ children }) => <div className={classes.Card}>{children}</div>;

export default Card;
