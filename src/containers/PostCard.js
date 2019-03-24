import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { selectPost } from '../actions';

import PostButton from '../elements/PostButton/PostButton';
import style from './PostCard.module.scss';
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
class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.selectPost(this.props.post);
  };
  render() {
    const text = this.props.post.text
      .substring(0, 800)
      .replace(/<(?:.|\n)*?>/gm, '');
    // <div>{props.post.read}</div>;
    const bodyClass = style.bodyFlex;
    // < div className = { style.star } > { props.post.star }</div>
    const star = 'fas fa-star';
    const datePublished = new Date(this.props.post.published);
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
      <div className={bodyClass} onClick={this.handleClick}>
        <div className={style.title}>{this.props.post.title}</div>
        {/* <div >{props.post.url}</div> */}
        <div className={style.secondLine}>
          <div className={style.author}>by {this.props.post.author}</div>
          <PostButton type="star" value={this.props.post.star} />
        </div>

        {/* <div>{props.post.parsed}</div> */}
        <div
          className={style.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className={style.statusLine}>
          <div>{dateToDisplay}</div>
          <div>~ {Math.round(this.props.post.text.length / 3000)} pages</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
};

const mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard);
