import React from 'react';

import PostButton from '../../elements/PostButton/PostButton';
import style from './PostShow.module.scss';
const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};
const daysOfWeek = {
  1: 'Sun',
  2: 'Mon',
  3: 'Tue',
  4: 'Wed',
  5: 'Thu',
  6: 'Fri',
  7: 'Sat'
};
const postShow = props => {
  // const text = props.post.text
  //   .replace(/<(?:.|\n)*?>/gm, "");
  const text = props.post.text;

  // <div>{props.post.read}</div>;
  const bodyClass = style.body;
  // < div className = { style.star } > { props.post.star }</div>
  const datePublished = new Date(props.post.published);
  let timeToDisplay = `${datePublished.getHours()}:${datePublished.getMinutes()} am`;
  if (datePublished.getHours() > 12) {
    timeToDisplay = `${datePublished.getHours() -
      12}:${datePublished.getMinutes()} pm`;
  }
  const dateToDisplay = `${
    daysOfWeek[datePublished.getDay() + 1]
  } ${datePublished.getDate()} ${
    months[datePublished.getMonth() + 1]
  } at ${timeToDisplay}`;

  return (
    <div className={style.body}>
      <div className={style.title}>{props.post.title}</div>
      {/* <div >{props.post.url}</div> */}
      <div className={style.secondLine}>
        <div className={style.author}>by {props.post.author}</div>
        <div className={style.buttonsWrapper}>
          <PostButton type="star" value={props.post.star} />
          <PostButton type="delete" />
        </div>
      </div>
      {/* <div>{props.post.parsed}</div> */}
      <div className={style.text} dangerouslySetInnerHTML={{ __html: text }} />
      <div className={style.divider} />

      <div className={style.statusLine}>
        <div>{dateToDisplay}</div>
        <div>~ {Math.round(props.post.text.length / 3000)} pages</div>
      </div>
    </div>
  );
};
export default postShow;
