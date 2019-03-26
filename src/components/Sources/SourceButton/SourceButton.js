import React from 'react';

class SourceButton extends React.Component {
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
      <button>
        <i className={button} />
      </button>
    );
  }
}

export default SourceButton;
