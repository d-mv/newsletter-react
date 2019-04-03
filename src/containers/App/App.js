import React from 'react';

import TitleBar from '../../components/TitleBar/TitleBar';
import ContentDisplay from '../ContentDisplay';
import NavMenu from '../../components/NavMenu/NavMenu';

class App extends React.Component {
  state = {
    module: 'Home',
    menuOpen: false
  };
  showModule = module => {
    this.setState(state => ({ module: module }));
  };
  menuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const options = {
      show: this.showModule,
      menuOpen: this.menuOpen,
      menuStatus: this.state.menuOpen
    };
    return (
      <main>
        <TitleBar toggle={this.showModule} />
        <ContentDisplay show={this.state.module} toggle={this.showModule} />
        <NavMenu options={options} />
      </main>
    );
  }
}

export default App;
