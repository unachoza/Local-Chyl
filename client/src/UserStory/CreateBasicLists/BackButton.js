import React from 'react';
import history from '../../history';
import Weekend from '../../assets/icons/Weekend.svg';

const BackButton = () => {
  return <img src={Weekend} className="icon" onClick={() => history.goBack()} />;
};
export default BackButton;
