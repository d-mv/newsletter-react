import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';

import SourceCard from './SourceCard';
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
      <section className={style.section}>
        <section>Add Source</section>
        {this.props.sources.map(source => {
          return <SourceCard source={source} key={source._id} />;
        })}
      </section>
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
