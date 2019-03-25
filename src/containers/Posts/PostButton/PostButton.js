import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../../../actions';

import style from './PostButton.module.scss';

class PostButton extends React.Component {
  updatePost = () => {
    let flag = '';
    if (this.props.value) {
      flag = false;
    } else {
      flag = true;
    }
    const query = { id: this.props.postId, fields: {} };
    const fields = {};
    fields[`${this.props.type}`] = flag;
    query['fields'] = fields;
    this.props.updatePost(query);
  };

  render() {
    let button = '';
    let buttonStyle = '';
    switch (this.props.type) {
      case 'star':
        button = 'fas fa-star';
        if (this.props.value) {
          buttonStyle = style.on;
        } else {
          buttonStyle = style.regular;
        }
        break;
      default:
        button = 'far fa-trash-alt';
        buttonStyle = style.delete;
    }
    return (
      <button className={buttonStyle} onClick={this.updatePost}>
        <i className={button} />
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updatePost: updatePost }, dispatch);
};

const mapStateToProps = state => {
  return {
    updatePost: state.updatePost
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostButton);
