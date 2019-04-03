import React from 'react';

import PostButton from '../../containers/Posts/PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostCard.module.scss';

class PostCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.selector(this.props.post._id);
  };

  render() {
    const text = `${this.props.post.text.replace(/<(?:.|\n)*?>/gm, ' ')}...`;
    let bodyClass = '';
    if (this.props.post.read) {
      bodyClass = style.bodyRead;
    } else {
      bodyClass = style.body;
    }
    const publishedDate = dateTime(new Date(this.props.post.published));
    return (
      <section className={bodyClass} key={this.props.post._id}>
        <header className={style.title} onClick={this.handleClick}>
          {this.props.post.title}
        </header>
        <section className={style.secondLine}>
          <div className={style.source}>@ {this.props.post.source}</div>
          <PostButton
            type="star"
            value={this.props.post.star}
            postId={this.props.post._id}
          />
        </section>
        <section
          className={style.text}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <footer className={style.statusLine}>
          <div>{publishedDate}</div>
          <div>~ {this.props.post.readTime} mins</div>
        </footer>
        <div className={style.divider} />
      </section>
    );
  }
}

export default PostCard;
