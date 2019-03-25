import React from 'react';

import PostButton from './PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostShow.module.scss';

class PostShow extends React.Component {
  handleClick = () => {
    window.open(this.props.post.url, '_blank');
  };

  render() {
    const text = this.props.post.text;
    const publishedDate = dateTime(new Date(this.props.post.published));
    const parsedDate = dateTime(new Date(this.props.post.parsed));
    const pages = Math.round(this.props.post.text.length / 3000);
    return (
      <div>
        <div className={style.body}>
          <div className={style.title} onClick={this.handleClick}>
            {this.props.post.title}
          </div>
          <div className={style.secondLine}>
            <div className={style.author}>by {this.props.post.author}</div>
            <div className={style.buttonsWrapper}>
              <PostButton
                type="star"
                value={this.props.post.star}
                postId={this.props.post._id}
              />
              <PostButton type="delete" />
            </div>
          </div>
          <div
            className={style.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div className={style.divider} />
          <div className={style.statusLine}>
            <div>published: {publishedDate}</div>
            <div>parsed: {parsedDate}</div>
            <div>~ {pages} pages</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow;
