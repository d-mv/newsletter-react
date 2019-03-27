import React from 'react';

import PostButton from '../../containers/Posts/PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostShow.module.scss';

class PostShow extends React.Component {
  handleClick = () => {
    window.open(this.props.post.url, '_blank');
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let author = '';
    if (!this.props.post.author) {
      author = '';
    } else {
      author = `by ${this.props.post.author}`;
    }
    const publishedDate = dateTime(new Date(this.props.post.published));
    const parsedDate = dateTime(new Date(this.props.post.parsed));
    return (
      <article className={style.body}>
        <header className={style.title} onClick={this.handleClick}>
          {this.props.post.title}
        </header>
        <div className={style.secondLine}>
          <div className={style.author}>{author}</div>
          <div className={style.buttonsWrapper}>
            <PostButton
              type="star"
              value={this.props.post.star}
              postId={this.props.post._id}
            />
            <PostButton
              type="delete"
              postId={this.props.post._id}
              toggle={this.props.toggle}
            />
          </div>
        </div>
        <section
          className={style.text}
          dangerouslySetInnerHTML={{ __html: this.props.post.text }}
        />
        <div className={style.divider} />
        <footer className={style.statusLine}>
          <div>published: {publishedDate}</div>
          <div>parsed: {parsedDate}</div>
          <div>~ {this.props.post.pages} pages</div>
        </footer>
      </article>
    );
  }
}

export default PostShow;
