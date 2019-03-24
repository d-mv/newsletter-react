import React from 'react';

import NavMenuElement from './NavMenuElement';
import style from './NavMenu.module.scss';

class NavMenu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <NavMenuElement name="arrow" />
        <NavMenuElement name="Home" />
        <NavMenuElement name="Sources" />
      </div>
    );
  }
}

export default NavMenu;
