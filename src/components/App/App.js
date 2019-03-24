import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../../containers/ContentDisplay';
import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentDisplay />
      </div>
    );
  }
}

export default App;
