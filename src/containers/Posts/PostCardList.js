import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../../actions';
import { selectPost } from '../../actions';

import PostCard from './PostCard';
import style from './PostCardList.module.scss';
import Error from '../../components/Error/Error';

class PostCardList extends React.Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.setPosts().then(data => {});
  };
  selectPostToShow = postId => {
    this.props.selectPost(postId).then(data => {
      this.props.showPost(data);
    });
  };
  render() {
    const message = this.props.posts.message;
    if (message) {
      return <Error message={message} />;
    }
    return (
      <div className={style.content}>
        {this.props.posts.map(post => {
          return (
            <PostCard
              selector={this.selectPostToShow}
              post={post}
              key={post._id}
            />
          );
        })}
      </div>
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
