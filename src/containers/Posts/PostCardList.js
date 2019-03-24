import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../../actions';

import PostCard from './PostCard';
import style from './PostCardList.module.scss';

class PostCardList extends React.Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.setPosts();
  };

  render() {
    return (
      <div className={style.content}>
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
