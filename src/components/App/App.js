import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../ContentDisplay';
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
        <TitleBar toggle={this.showModule} />
        <ContentDisplay show={this.state.module} toggle={this.showModule} />
        <NavMenu show={this.showModule} />
      </main>
    );
  }
}

export default App;
