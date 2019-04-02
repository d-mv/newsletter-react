import React from 'react';

import style from './NavMenuElement.module.scss';

class NavMenuElement extends React.Component {
  handleClick = () => {
    if (this.props.name !== 'arrow') this.props.options.show(this.props.name);
    this.props.options.menuOpen('');
  };

  render() {
    let elementStyle = style.button;
    let button = this.props.name;
    if (button === '⋮') {
      if (this.props.options.menuStatus) {
        elementStyle = style.buttonArrowOpen;
      } else {
        elementStyle = style.buttonArrow;
      }
    }
    return (
      <div onClick={this.handleClick} className={elementStyle}>
        {button}
      </div>
    );
  }
}

export default NavMenuElement;
