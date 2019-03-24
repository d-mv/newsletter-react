import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../../actions';

import NavMenu from '../NavMenu/NavMenu';
import PostCard from '../../containers/PostCard';
import style from './PostCardList.module.scss';

class PostCardList extends React.Component {
  render() {
    return (
      <div className={style.contentFlex}>
        <NavMenu />
        {this.props.posts.map(post => {
          return (
            <div key={post.title}>
              <PostCard post={post} />
              <div className={style.divider} />
            </div>
          );
        })}
      </div>
    );
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
)(PostCardList);
