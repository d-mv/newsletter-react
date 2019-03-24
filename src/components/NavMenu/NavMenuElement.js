import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { selectModule } from '../../actions';

import style from './NavMenuElement.module.scss';

class NavMenuElement extends React.Component {
  handleClick = () => {
    this.props.selectModule(this.props.name);
  };

  render() {
    if (this.props.name === 'arrow') {
      const classStyle = 'fas fa-chevron-left';
      return (
        <div className={style.elementArrow} onClick={this.handleClick}>
          <div className={style.buttonArrow}>
            <i className={classStyle} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.element} onClick={this.handleClick}>
          <div className={style.button}>{this.props.name}</div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectModule: selectModule }, dispatch);
};

const mapStateToProps = state => {
  return {
    selectModule: state.selectModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenuElement);
