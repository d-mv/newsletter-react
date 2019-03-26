import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../../containers/ContentDisplay';
import NavMenu from '../NavMenu/NavMenu';

class App extends React.Component {
  state = {
    module: 'Home'
  };
  showModule = module => {
    this.setState(state => ({ module: module }));
  };
  render() {
    return (
      <main>
        <TitleBar />
        <ContentDisplay show={this.state.module} />
        <NavMenu show={this.showModule} />
      </main>
    );
  }
}

export default App;
