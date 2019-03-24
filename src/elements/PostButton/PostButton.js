import React from 'react';

import style from './PostButton.module.scss';

const postButton = props => {
  let button = '';
  let buttonStyle = '';
  switch (props.type) {
    case 'star':
      button = 'fas fa-star';
      if (props.value) {
        buttonStyle = style.on;
      } else {
        buttonStyle = style.regular;
      }
      break;
    default:
      button = 'far fa-trash-alt';
      buttonStyle = style.delete;
  }
  return (
    <div className={buttonStyle}>
      <i className={button} />
    </div>
  );
};

export default postButton;
