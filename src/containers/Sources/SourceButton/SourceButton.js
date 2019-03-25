import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { updatePost } from '../../../actions';

class SourceButton extends React.Component {
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
    switch (this.props.type) {
      case 'edit':
        button = 'fas fa-pencil-alt';
        break;
      case 'add':
        button = 'fas fa-plus';
        break;
      default:
        button = 'far fa-trash-alt';
    }
    return (
      <button onClick={this.updatePost}>
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
)(SourceButton);
