import React from 'react';

import style from './NavMenuElement.module.scss';

class NavMenuElement extends React.Component {
  handleClick = () => {
    if (this.props.name !== 'arrow') this.props.options.show(this.props.name);
    this.props.options.menuOpen('');
  };

  render() {
    console.log(this.props);
    if (this.props.name === 'arrow') {
      const classStyle = 'fas fa-chevron-left';
      return (
        <section
          className={style.elementArrow}
          id={this.props.name}
          onClick={this.handleClick}
        >
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
