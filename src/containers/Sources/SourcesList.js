import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';
import { addSource } from '../../actions';
import { deleteSource } from '../../actions';

import SourceCard from '../../components/Sources/SourceCard';
import SourceButton from '../../components/Sources/SourceButton/SourceButton';
import SourceCreate from './SourceCreate/SourceCreate';
import style from './SourcesList.module.scss';

class SourcesList extends React.Component {
  state = {
    showAddSource: false,
    message: ''
  };

  toggleAddSource = () => {
    this.setState(state => ({ showAddSource: !this.state.showAddSource }));
  };

  changeMessage = message => {
    this.setState({ message: message });
    setTimeout(this.clearMessage, 3000);
  };

  componentWillMount() {
    this.fetchSources();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchSources, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchSources = () => {
    this.props.setSources();
  };

  clearMessage = () => {
    this.setState({ message: '' });
  };

  createSource = fields => {
    if (fields.name === '' || fields.home === '' || fields.url === '')
      this.changeMessage('Not enough info. Source not created.');
    const request = { action: ['source', 'create'], fields };
    this.props.addSource(request);
  };

  sourceDelete = id => {
    const request = { action: ['source', 'delete'], id: id };
    this.props.deleteSource(request);
    this.fetchSources();
  };

  render() {
    return (
      <section className={style.section}>
        <SourceButton
          type="add"
          show={this.toggleAddSource}
          name="Add Source"
        />
        {this.state.showAddSource ? (
          <SourceCreate
            create={this.createSource}
            toggle={this.toggleAddSource}
          />
        ) : null}
        {this.state.message === '' ? null : (
          <div className={style.message}>{this.state.message}</div>
        )}
        {this.props.sources.map(source => {
          return (
            <SourceCard
              source={source}
              key={source._id}
              sourceDelete={this.sourceDelete}
            />
          );
        })}
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSources, addSource, deleteSource }, dispatch);
};

const mapStateToProps = state => {
  return {
    sources: state.sources,
    addSource: state.addSource,
    deleteSource: state.deleteSource
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList);
