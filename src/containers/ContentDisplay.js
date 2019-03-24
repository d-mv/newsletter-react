import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { setPosts } from '../actions';

import NavMenu from '../components/NavMenu/NavMenu';
import PostCardList from '../components/Posts/PostCardList';
import PostShow from '../components/Posts/PostShow';

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
    console.log(this.props.selectModule);
    const selected = 0;
    const display = '';
    if (this.props.selectPost === '') {
      return (
        <div className={style.content}>
          <PostCardList />
        </div>
      );
    } else {
      return (
        <div className={style.content}>
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
    selectPost: state.selectPost,
    selectModule: state.selectModule
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDisplay);
