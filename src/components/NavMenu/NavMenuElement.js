import React from 'react';

import style from './NavMenuElement.module.scss';

class NavMenuElement extends React.Component {
  handleClick = () => {
    this.props.show(this.props.name);
  };

  render() {
    if (this.props.name === 'arrow') {
      const classStyle = 'fas fa-chevron-left';
      return (
        <section className={style.elementArrow} onClick={this.handleClick}>
          <div className={style.buttonArrow}>
            <i className={classStyle} />
          </div>
        </section>
      );
    } else {
      return (
        <section className={style.element} onClick={this.handleClick}>
          <div className={style.button}>{this.props.name}</div>
        </section>
      );
    }
  }
}

export default NavMenuElement;
