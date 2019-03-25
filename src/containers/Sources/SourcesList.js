import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setSources } from '../../actions';
import { addSource } from '../../actions';
// import { sourceCreateModule } from "../../actions";

import SourceCard from './SourceCard';
import SourceButton from './SourceButton/SourceButton';
import SourceCreate from './SourceCreate/SourceCreate';
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

  addSource = () => {
    console.log(this.props);
    const fields = {
      name: 'Smashing Magazine',
      url: 'http://www.smashingmagazine.com/feed/',
      home: 'https://www.smashingmagazine.com/articles/'
    };
    const request = { action: ['source', 'create'], fields };
    this.props.addSource(request);
  };
  render() {
    console.log(this.props.sourceCreateModule);
    return (
      <section className={style.section}>
        <div onClick={this.addSource} className={style.addSource}>
          <SourceButton type="add" />
          Add Source
        </div>
        {this.props.sourceCreateModule ? <SourceCreate /> : null}
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
    addSource: state.addSource,
    sourceCreateModule: state.sourceCreateModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList);
