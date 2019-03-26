import React from 'react';

import PostCardList from '../containers/Posts/PostCardList';
import SourcesList from '../containers/Sources/SourcesList';
import PostShow from './Posts/PostShow';

class ContentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  setPostToShow = post => {
    this.setState({ post: post.payload });
    this.props.toggle('show');
  };

  render() {
    switch (this.props.show) {
      case 'Home':
        return <PostCardList showPost={this.setPostToShow} />;
      case 'show':
        return <PostShow post={this.state.post} />;
      case 'Sources':
        return <SourcesList />;
      default:
        return <PostCardList />;
    }
  }
}

export default ContentDisplay;
