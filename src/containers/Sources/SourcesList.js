import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';
import { addSource } from '../../actions';
// import { sourceCreateModule } from "../../actions";

import SourceCard from '../../components/Sources/SourceCard';
import SourceButton from './SourceButton/SourceButton';
import SourceCreate from './SourceCreate/SourceCreate';
import style from './SourcesList.module.scss';

class SourcesList extends React.Component {
  state = {
    showAddSource: false
  };
  toggleAddSource = () => {
    this.setState(state => ({ showAddSource: !this.state.showAddSource }));
    console.log(this.state.showAddSource);
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

  createSource = fields => {
    const request = { action: ['source', 'create'], fields };
    this.props.addSource(request);
  };

  render() {
    return (
      <section className={style.section}>
        <div className={style.addSource} onClick={this.toggleAddSource}>
          <SourceButton type="add" />
          Add Source
        </div>
        {this.state.showAddSource ? (
          <SourceCreate
            create={this.createSource}
            toggle={this.toggleAddSource}
          />
        ) : null}
        {this.props.sources.map(source => {
          return <SourceCard source={source} key={source._id} />;
        })}
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSources, addSource }, dispatch);
};

const mapStateToProps = state => {
  return {
    sources: state.sources,
    addSource: state.addSource
    // sourceCreateModule: state.sourceCreateModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList);
