import React from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { selectPost } from '../../actions';

import PostButton from './PostButton/PostButton';
import dateTime from '../../modules/date_time';
import style from './PostShow.module.scss';

class PostShow extends React.Component {
  handleClick = () => {
    window.open(this.props.selectPost.url, '_blank');
  };

  componentWillMount() {
    // await this.props.selectPost()
  }

  render() {
    let author = '';
    if (!this.props.selectPost.author) {
      author = '';
    } else {
      author = `by ${this.props.selectPost.author}`;
    }
    const text = this.props.selectPost.text;
    const publishedDate = dateTime(new Date(this.props.selectPost.published));
    const parsedDate = dateTime(new Date(this.props.selectPost.parsed));
    const pages = Math.round(this.props.selectPost.text.length / 3000);
    return (
      <article className={style.body}>
        <header className={style.title} onClick={this.handleClick}>
          {this.props.selectPost.title}
        </header>
        <div className={style.secondLine}>
          <div className={style.author}>{author}</div>
          <div className={style.buttonsWrapper}>
            <PostButton
              type="star"
              value={this.props.selectPost.star}
              postId={this.props.selectPost._id}
            />
            <PostButton type="delete" />
          </div>
        </div>
        <content
          className={style.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className={style.divider} />
        <footer className={style.statusLine}>
          <div>published: {publishedDate}</div>
          <div>parsed: {parsedDate}</div>
          <div>~ {pages} pages</div>
        </footer>
      </article>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
};

// ! changed selectedPost to selectPost
const mapStateToProps = state => {
  return {
    selectPost: state.selectPost
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
