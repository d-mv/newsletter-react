import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../actions';

import PostCardList from './Posts/PostCardList';
import SourcesList from './Sources/SourcesList';
import PostShow from './Posts/PostShow';

import style from './ContentDisplay.module.scss';

class ContentDisplay extends React.Component {
  shouldComponentUpdate(nextProps) {
    const newModule = this.props.selectModule !== nextProps.selectModule;
    const newSelectPost = this.props.selectPost !== nextProps.selectPost;
    // const differentDone = this.props.done !== nextProps.done
    return newModule || newSelectPost;
    // return newModule || differentDone;
  }

  render() {
    // const postId = '5c96634c1580d234f5a062d2';
    const selected = this.props.selectPost;
    const display = this.props.selectModule;
    switch (display) {
      case 'Home':
        return (
          <div className={style.content}>
            <PostCardList />
          </div>
        );
      case 'show':
        return (
          <div className={style.content}>
            <PostShow post={selected} />
          </div>
        );
      case 'Sources':
        return (
          <div className={style.content}>
            <SourcesList />
          </div>
        );
      default:
        return (
          <div className={style.content}>
            <PostCardList />
          </div>
        );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPosts }, dispatch);
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    selectPost: state.selectPost,
    selectModule: state.selectModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDisplay);
