import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../actions';

import PostCard from './PostCard';
import PostShow from '../components/Post/PostShow';

import style from './ContentDisplay.module.scss';

class ContentDisplay extends React.Component {
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
    const postId = '5c96634c1580d234f5a062d2';
    const selected = 0;
    // console.log(this.props.selectPost)
    // this.props.posts.map(post => {
    //   if (post.id === (postId)) {
    //     return post
    //   }
    // })
    if (this.props.selectPost === '') {
      return (
        <div className={style.contentFlex}>
          {this.props.posts.map(post => {
            return (
              <div>
                <PostCard post={post} key={post.title} />
                <div className={style.divider} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <PostShow post={this.props.selectPost} />
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
    selectPost: state.selectPost
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDisplay);
