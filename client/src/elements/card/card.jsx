import React from 'react';
import PropTypes from 'prop-types';
import classes from './card.module.css';


const Card = ({ children }) => <div className={classes.Card}>{children}</div>;

Card.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

Card.defaultProps = {
  children: {},
};

export default Card;
