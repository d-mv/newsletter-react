import React from 'react';

import PostCardList from '../containers/Posts/PostCardList';
import SourcesList from '../containers/Sources/SourcesList';
import PostShow from '../containers/Posts/PostShow';

class ContentDisplay extends React.Component {
  shouldComponentUpdate(nextProps) {
    const newModule = this.props.show !== nextProps.show;
    // const newSelectPost = this.props.selectPost !== nextProps.selectPost;
    // const differentDone = this.props.done !== nextProps.done;
    console.log(
      `Switching to %c${nextProps.show}`,
      'color: green; background-color: LightGreen; padding: 2px 5px; border-radius: 2px'
    );
    return newModule;
  }

  render() {
    switch (this.props.show) {
      case 'Home':
        return <PostCardList />;
      case 'show':
        return <PostShow />;
      case 'Sources':
        return <SourcesList />;
      default:
        return <PostCardList />;
    }
  }
}

export default ContentDisplay;
