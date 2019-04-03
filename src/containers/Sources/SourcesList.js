import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';
import { addSource } from '../../actions';
import { deleteSource } from '../../actions';
import { refreshPosts } from '../../actions';
import { updateSource } from '../../actions';

import SourceCard from '../../components/Sources/SourceCard';
import SourceButton from '../../components/Sources/SourceButton/SourceButton';
import SourceCreate from './SourceCreate/SourceCreate';
import style from './SourcesList.module.scss';

class SourcesList extends React.Component {
  state = {
    showAddSource: false,
    showEditSource: false,
    showEditSourceId: '',
    message: ''
  };

  toggleAddSource = () => {
    // if Edit Source component open - close it
    if (this.state.showEditSource)
      this.setState({
        showEditSource: false,
        showEditSourceId: ''
      });
    this.setState(state => ({
      showAddSource: !this.state.showAddSource
    }));
  };

  toggleEditSource = id => {
    console.log(id);
    console.log(this.state.showEditSource);
    console.log(this.state.showEditSourceId);
    // if Add Source component open - close it
    if (this.state.showAddSource) this.setState({ showAddSource: false });
    // if Show Edit is true and ...
    if (this.state.showEditSource) {
      // ... there is same ID - close it
      if (id === this.state.showEditSourceId) {
        this.setState({
          showEditSource: !this.state.showEditSource,
          showEditSourceId: id
        });
        // ... this is different ID - open the other one
      } else if (id && id !== this.state.showEditSourceId) {
        this.setState({
          showEditSource: true,
          showEditSourceId: id
        });
      } else {
        this.setState({
          showEditSource: false,
          showEditSourceId: ''
        });
      }
    }
    // if Show Edit is false
    else {
      this.setState({
        showEditSource: true,
        showEditSourceId: id
      });
    }
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

  updateSource = fields => {
    if (
      fields.values.name === '' ||
      fields.values.home === '' ||
      fields.values.url === '' ||
      fields.values.id === ''
    )
      this.changeMessage('Not enough info. Source not created.');
    const request = {
      action: ['source', 'update'],
      id: fields.id,
      fields: fields.values
    };
    this.props.updateSource(request);
  };

  sourceDelete = id => {
    const request = { action: ['source', 'delete'], id: id };
    this.props.deleteSource(request);
    this.fetchSources();
  };

  handleRefreshPosts = () => {
    this.props.refreshPosts();
  };

  render() {
    return (
      <section className={style.section}>
        <div className={style.buttonsWrapper}>
          {this.props.sources.length > 0 ? (
            <SourceButton
              type="refresh"
              refresh={this.handleRefreshPosts}
              name="Refresh"
            />
          ) : null}
          <SourceButton
            type="add"
            show={this.toggleAddSource}
            name="Add Source"
          />
        </div>
        {this.state.showAddSource ? (
          <SourceCreate
            mode="Create"
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
              showEdit={this.state.showEditSource}
              showEditSourceId={this.state.showEditSourceId}
              toggleEditSource={this.toggleEditSource}
              updateSource={this.updateSource}
            />
          );
        })}
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setSources, addSource, deleteSource, refreshPosts, updateSource },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    sources: state.sources,
    addSource: state.addSource,
    deleteSource: state.deleteSource,
    refreshPosts: refreshPosts,
    updateSource: updateSource
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList);
