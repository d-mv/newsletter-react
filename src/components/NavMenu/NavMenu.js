import React from 'react';

import NavMenuElement from './NavMenuElement';
import style from './NavMenu.module.scss';

class NavMenu extends React.Component {
  render() {
    let menuStyle = style.menu;
    if (this.props.options.menuStatus) menuStyle = style.menuOpen;
    return (
      <nav className={menuStyle}>
        <NavMenuElement options={this.props.options} name="toggle" />
        <NavMenuElement options={this.props.options} name="Home" />
        <NavMenuElement options={this.props.options} name="Sources" />
      </nav>
    );
  }
}

export default NavMenu;
