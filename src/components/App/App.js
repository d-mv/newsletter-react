import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../../containers/ContentDisplay';
import NavMenu from '../NavMenu/NavMenu';
import style from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentDisplay />
        <NavMenu />
      </div>
    );
  }
}

export default App;
