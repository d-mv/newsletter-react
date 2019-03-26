import React from 'react';

import style from './SourceCreate.module.scss';

class SourceCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      homepage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = {};
    let field = event.target.name;
    change[field] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    const values = {
      name: event.target[0].value,
      url: event.target[1].value,
      home: event.target[2].value
    };
    this.props.toggle();
    this.props.create(values);
  }
  render() {
    console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit} className={style.createForm}>
        <label>
          <div className={style.labelTitle}>Name</div>
          <input
            className={style.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className={style.labelTitle}>URL</div>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className={style.labelTitle}>Homepage</div>
          <input
            type="text"
            name="home"
            value={this.state.home}
            onChange={this.handleChange}
          />
        </label>
        <button
          className={style.submit}
          as="input"
          type="submit"
          value="Submit"
        >
          Create
        </button>
      </form>
    );
  }
}

export default SourceCreate;
