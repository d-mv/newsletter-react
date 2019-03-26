import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../../actions';
import { selectPost } from '../../actions';

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
  selectPostToShow = postId => {
    this.props.selectPost(postId).then(post => this.props.showPost(post));
  };
  render() {
    return (
      <section className={style.content}>
        {this.props.posts.map(post => {
          return (
            <section key={post._id}>
              <PostCard selector={this.selectPostToShow} post={post} />
            </section>
          );
        })}
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPosts, selectPost }, dispatch);
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
