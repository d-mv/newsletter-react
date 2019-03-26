import React from 'react';

import NavMenuElement from '../../containers/NavMenu/NavMenuElement';
import style from './NavMenu.module.scss';

class NavMenu extends React.Component {
  render() {
    return (
      <nav className={style.menu}>
        <NavMenuElement show={this.props.show} name="arrow" />
        <NavMenuElement show={this.props.show} name="Home" />
        <NavMenuElement show={this.props.show} name="Sources" />
      </nav>
    );
  }
}

export default NavMenu;
