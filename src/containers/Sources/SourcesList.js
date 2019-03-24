import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';

import style from './SourcesList.module.scss';

class SourcesList extends React.Component {
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
  render() {
    console.log();
    return (
      <div>
        {this.props.sources.map(source => {
          return <div key={source.name}>{source.name}</div>;
        })}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setSources }, dispatch);
};

const mapStateToProps = state => {
  return {
    sources: state.sources
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList);
