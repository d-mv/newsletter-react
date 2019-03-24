import React from 'react';

import PostButton from '../../elements/PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostShow.module.scss';

const handleClick = url => {
  window.open(url, '_blank');
};

const postShow = props => {
  const text = props.post.text;
  const publishedDate = dateTime(new Date(props.post.published));
  const parsedDate = dateTime(new Date(props.post.parsed));
  const pages = Math.round(props.post.text.length / 3000);
  return (
    <div>
      <div className={style.body}>
        <div
          className={style.title}
          onClick={() => handleClick(props.post.url)}
        >
          {props.post.title}
        </div>
        <div className={style.secondLine}>
          <div className={style.author}>by {props.post.author}</div>
          <div className={style.buttonsWrapper}>
            <PostButton type="star" value={props.post.star} />
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
};
export default postShow;
